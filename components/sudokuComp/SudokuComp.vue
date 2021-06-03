<template>
	<view>

		<view class="operations">
			<u-button :custom-style="warningButtonStyle" hair-line="false" open-type="default" ripple ripple-bg-color="#efe9d3"
				@click="clearAllCell" v-if="gameMode==='NORMAL'">
				全部清空
			</u-button>

			<u-button :custom-style="infoButtonStyle" hair-line="true" open-type="default" ripple ripple-bg-color="#c19a95"
				@click="setDisplay" v-if="gameMode==='NORMAL'" v-text="displayMsg">
			</u-button>
		</view>

		<Board :squares="squareInfos"></Board>

		<view class="operations">
			<u-button :custom-style="infoButtonStyle" hair-line="false"  open-type="default" ripple ripple-bg-color="#c19a95"
				@click="revoke" v-if="gameMode==='NORMAL'">
				<u-icon name="reload" size="50" class="reverseIcon"></u-icon>
			</u-button>

			<u-button :custom-style="infoButtonStyle" hair-line="false"  open-type="default" ripple ripple-bg-color="#c19a95"
				@click="clearOneCell" v-if="gameMode==='NORMAL'">
				清空
			</u-button>

			<u-button :custom-style="infoButtonStyle" hair-line="false" v-if="gameMode==='NORMAL'" open-type="default" ripple
				ripple-bg-color="#c19a95" @click="withdraw">
				<!-- 撤回 -->
				<u-icon name="reload" size="50"></u-icon>
			</u-button>
		</view>

		<PlainNumSelcotr v-if="gameMode==='NORMAL'" 
		:displayAutoControl="offsetDisplayAutoControl"
		:list2BSelect="offset2BSelect" 
		:list2BDisplay="offset2BDisplay" 
		:currentItem="currNum"
			id="NumSelector" 
			@selected="setSelectedCellNumber" 
			@changeAutoControl="dealAutoControlChange"
			v-show="showSelector">
		</PlainNumSelcotr>

		<SteerWheel v-if="gameMode==='PUZZLE'" id="SteerWheel" @tapSteerWheel="tapSteerWheel"></SteerWheel>

	</view>
</template>

<script>
	import Vue from 'vue';
	import {
		mapGetters,
		mapMutations,
		mapActions,
		mapState,
	} from 'vuex';
	import Board from './Board/Board.vue';
	import PlainNumSelcotr from './PlainNumSelector/PlainNumSelector.vue';
	import stack from './stack.js';
	import SteerWheel from './SteerWheel/SteerWheel.vue';

	export default {
		props: {
			/*使用字符串常量模拟枚举类型，表示两种游戏模式NORMAL与PUZZLE。*/
			gameMode: {
				type: String,
				default: "NORMAL",
				// default: "PUZZLE",
			},

			/*接受一个9*9的二位数组，数组中每个元素在0~9之间，数组中的每个元素映射到数独游戏中的一个格子。
			//若gameMode是NORMAL，则使用0代表需要玩家填写。若gameMode是PUZZLE，则有且仅有一个Block（即一个3*3的宫格）全为0*/
			sudokuState: {
				type: Array,
				required: true,
			},
		}, //end of props

		data() {
			return {
				displayMsg: "显示候选",
				offsetDisplayAutoControl: [],

				stack, //for revoke and withdraw
				pushFlag: true,

				//data 4 numselector
				initSelectorFlag: true,
				offsetAbleCellInfos: Array,
				showSelector: false,
				offset2BSelect: Array,
				offset2BDisplay: Array,
				currNum: Number,

				//data 4 wheel
				offsetMoveDir: String,
				emptySquareCoor: {
					i: 0,
					j: 0,
				},
				squareInfos: [
					[{
							squareNo: 0,
							squareRow: 0,
							squareCol: 0
						},
						{
							squareNo: 1,
							squareRow: 0,
							squareCol: 1
						},
						{
							squareNo: 2,
							squareRow: 0,
							squareCol: 2
						},
					],
					[{
							squareNo: 3,
							squareRow: 1,
							squareCol: 0
						},
						{
							squareNo: 4,
							squareRow: 1,
							squareCol: 1
						},
						{
							squareNo: 5,
							squareRow: 1,
							squareCol: 2
						},
					],
					[{
							squareNo: 6,
							squareRow: 2,
							squareCol: 0
						},
						{
							squareNo: 7,
							squareRow: 2,
							squareCol: 1
						},
						{
							squareNo: 8,
							squareRow: 2,
							squareCol: 2
						},
					],
				], //end of squares


				//operation button style
				warningButtonStyle: {
					color: '#FFFFFF',
					backgroundColor: '#bd8577',
					fontSize: "40rpx",
				},
				infoButtonStyle: {
					color: '#7b5f5c',
					backgroundColor: '#eee8d2',
					fontSize: "40rpx",
				},
			}
		}, //end of data

		computed: {
			...mapState({
				hideDisplayFlag: state => state.sudokuComp.hideDisplayFlag,
				displayAutoControlState: state => state.sudokuComp.displayAutoControlState,
			}),
			...mapGetters([
				// 'displayAutoControlState',
				'cellDisplayAutoControl',
				'cellNum2BDisplay',
				'cellNum2BSelect',

				'cellClick',
				'selectedCellCoordinate',
				'selectedCellCurrentNumber',
				'allAbleCellCurrentInfos',
				'oneDisableCellCoor',

				'currentSquareState',
				'currentSudokuState',

				'successFlag',
			]), //end of mapGetters

		}, //end of computed

		watch: {
			/**
			 * @description watch selected cell coor, when a cell has been clicked
			 * and part of reovoke/withdraw operation. handler will init selector 
			 * and push info into stack for revoke and withdraw
			 *
			 */
			selectedCellCoordinate: {
				handler(newVal, oldVal) {
					let row = newVal.row;
					let col = newVal.col;
					let number = this.selectedCellCurrentNumber;

					if (this.cellClick) {
						this.initSelector(row, col, number);

						this.initSelectorFlag = true;
						this.recoverCellClick();
					}


					if ((row === oldVal.row) && (col === oldVal.col)) {
						console.log("at the same cell");
						this.pushFlag = true;
						return;
					}

					console.log("in watch: selectedCellCoordinate")
					console.log(`pushFlag: ${this.pushFlag}  initSelectorFlag: ${this.initSelectorFlag}`)

					if (this.initSelectorFlag) this.initSelector(row, col, number);

					if (this.pushFlag) {
						console.log("stack.push in selectedCellCoordinate")
						//stack push cel info for revoke
						let infoList = [];
						let info = {
							row: row,
							col: col,
							number: number,
						};
						//if new coor is from stack then it should not be push into again
						infoList.push(info);
						this.compPush(infoList);
					}

					//recover
					this.pushFlag = true;
					this.initSelectorFlag = true;
					console.log(`pushFlag: ${this.pushFlag}  initSelectorFlag: ${this.initSelectorFlag}`)
					console.log("end watch")
				},
			}, //end of selectedCell		
			
			displayAutoControlState: {
				handler(newVal, oldVal){
					console.log(`in watch: displayAutoControlState`) ;
					this.offsetDisplayAutoControl = this.cellDisplayAutoControl(
						this.selectedCellCoordinate.row, 
						this.selectedCellCoordinate.col
					);
					console.log(this.offsetDisplayAutoControl) ;
				},
				deep: true,
			},
		}, //end of watch

		beforeMount() {

			if (this.hideDisplayFlag) {
				this.displayMsg = "显示候选";
			} else {
				this.displayMsg = "隐藏候选";
			}

			this.initSudokuState({
				gameMode: this.gameMode,
				sudokuState: this.sudokuState,
			});

			let offsetSudokuState = this.currentSudokuState;
			this.offsetAbleCellInfos = this.allAbleCellCurrentInfos();
			this.offset2BSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			this.currNum = 1;
			this.showSelector = false;

			if (this.gameMode === 'PUZZLE') {
				this.initSquareState({
					squareState: [
						[0, 1, 2],
						[3, 4, 5],
						[6, 7, 8]
					]
				});
				//find emptySquareCoor		
				let emptyFlag = true;
				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						emptyFlag = true;
						for (let row = 3 * i; row < 3 * (i + 1); row++) {
							for (let col = 3 * j; col < 3 * (j + 1); col++) {
								if (this.currentSudokuState[row][col].number !== 0) {
									emptyFlag = false;
									break;
								}
							}
							if (!emptyFlag) break;
						} //end of for in square
						if (emptyFlag) {
							this.emptySquareCoor = {
								i: i,
								j: j,
							}
							break;
						}
					}
					if (emptyFlag) break;
				} //end of for
			} //end of if-else					
		}, //end of beforeMount()

		methods: {

			setSelectedCellNumber(selectedNumber) {
				let info = {
					row: this.selectedCellCoordinate.row,
					col: this.selectedCellCoordinate.col,
					number: selectedNumber,
				};
				let infoList = [];
				infoList.push(info);

				this.stepOperation(infoList);

				console.log("stack.push in setSelectedCellNumber")

				this.compPush(infoList);
				this.judgeSuccess();
			}, //end of setSelectedCellNumber			

			/**
			 * @description just like player select 0 in numSelector
			 */
			clearOneCell() {
				this.setSelectedCellNumber(0);
			},


			clearAllCell() {
				let beforeInfos = this.allAbleCellCurrentInfos();
				// console.log("in clearAllCell") ;
				// console.log(beforeInfos) ;

				this.compPush(beforeInfos);

				// this.clearAllSelectableCell();					
				let afterInfos = JSON.parse(JSON.stringify(beforeInfos));
				afterInfos.forEach(info => {
					info.number = 0;
				});


				// console.log(afterInfos) ;
				this.compPush(afterInfos);

				this.pushFlag = false;
				this.initSelectorFlag = false;
				this.showSelector = false;
				this.stepOperation(afterInfos);
			}, //end of clearAll

			/**
			 * @description use the fore infoList in the stack to 
			 * 
			 */
			revoke() {
				console.log("revoke")
				let infoList = this.stack.revoke();
				this.initSelectorFlag = true;
				this.pushFlag = false;
				this.stepOperation(infoList);
			}, //end of revoke()

			withdraw() {
				console.log("withdraw");
				this.initSelectorFlag = true;
				this.pushFlag = false;
				let infoList = this.stack.withdraw();
				this.stepOperation(infoList);
			}, //end of withdraw()

			/**
			 * @param {Object} infoList
			 * mutate CellNumber ByList and then 
			 * deal with num selector correctly
			 */
			stepOperation(infoList) {
				if (!infoList) return;
				// console.log("in SudokuComp stepOperation")
				// console.log(infoList) ;
				this.mutateCellNumberByList(infoList);

				if (infoList.length === 1) {
					//select another cell / change cell number
					let info = infoList[0];
					this.mutateSelectedCellCoordinate({
						row: info.row,
						col: info.col,
					})
					this.clickACell();
				} else {
					this.showSelector = false;
					this.pushFlag = false;
					this.initSelectorFlag = false;
					//only in clear all cell condition will getinto this branch		
					// this.mutateSelectedCellCoordinate({
					// 	row: -1,
					// 	col: -1,
					// })
					this.mutateSelectedCellCoordinate(this.oneDisableCellCoor());

					// this.showSelector = false ;
				}
			},

			setDisplay() {

				console.log(`in setDisplay`);
				if (this.hideDisplayFlag) {
					this.mutateHideDisplayFlag(false);
					this.displayMsg = "隐藏候选";
				} else {
					this.mutateHideDisplayFlag(true);
					this.displayMsg = "显示候选";
				}
			}, //end of 


			/**
			 * @description judgeSuccess when a cell number has change and tap the wheel
			 */
			judgeSuccess() {
				if (this.successFlag()) {
					console.log("you win the game!!!");
					this.$emit('gameOver');
				} else {
					console.log("The Game Draw");
				}
			},
			
			/**
			 * @param {Object} payload {number, flag}
			 */
			dealAutoControlChange(payload){
				console.log(`in deal AutoControl change`)
				console.log(payload) ;
				this.mutateDisplayAutoControlState({
					row: this.selectedCellCoordinate.row,
					col: this.selectedCellCoordinate.col,
					number: payload.number,
					autoFlag: payload.flag,
				}) ;
			},

			tapSteerWheel(direction) {
				//find the 2 squares to swap
				let emptySquareInfo = this.squareInfos[this.emptySquareCoor.i][this.emptySquareCoor.j];
				let row1 = emptySquareInfo.squareRow;
				let col1 = emptySquareInfo.squareCol;

				let deltaRow = 0;
				let deltaCol = 0;
				if (direction === "arrow-up") {
					if (row1 === 2) return;
					deltaRow = 1;
				} else
				if (direction === "arrow-down") {
					if (row1 === 0) return;
					deltaRow = -1;
				} else
				if (direction === "arrow-left") {
					if (col1 === 2) return;
					deltaCol = 1;
				} else
				if (direction === "arrow-right") {
					if (col1 === 0) return;
					deltaCol = -1;
				}

				let targetRow = row1 + deltaRow;
				let targetCol = col1 + deltaCol;

				let targetSquareCoor = {
					i: 0,
					j: 0,
				}

				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						let info = this.squareInfos[i][j];
						if ((info.squareRow === targetRow) && (info.squareCol === targetCol)) {
							targetSquareCoor.i = i;
							targetSquareCoor.j = j;
							break;
						}
					}
				} //end of loop

				this.swapSquare(this.emptySquareCoor.i, this.emptySquareCoor.j, targetSquareCoor.i, targetSquareCoor.j)
				this.judgeSuccess();
			}, //end of tapSteerWheel

			swapSquare(row1, col1, row2, col2) {

				//swap square coordinate in this.squareInfos
				let row = this.squareInfos[row1][col1].squareRow;
				this.squareInfos[row1][col1].squareRow = this.squareInfos[row2][col2].squareRow;
				this.squareInfos[row2][col2].squareRow = row;
				let col = this.squareInfos[row1][col1].squareCol;
				this.squareInfos[row1][col1].squareCol = this.squareInfos[row2][col2].squareCol;
				this.squareInfos[row2][col2].squareCol = col;


				this.mutateCurrentSudokuStateBySquare({
					squareInfo1: {
						squareRow: this.squareInfos[row1][col1].squareRow,
						squareCol: this.squareInfos[row1][col1].squareCol,
					},
					squareInfo2: {
						squareRow: this.squareInfos[row2][col2].squareRow,
						squareCol: this.squareInfos[row2][col2].squareCol,
					},
				});
			}, //end of swapSquare



			...mapMutations([
				'initSudokuState',
				'initSquareState',

				'mutateHideDisplayFlag',
				'mutateDisplayAutoControlState',

				'clickACell',
				'recoverCellClick',
				'mutateCellNumber',
				'mutateSelectedCellCoordinate',
				'mutateCellNumberByList',

				'mutateCurrentSquareState',
				'mutateCurrentSudokuStateBySquare',
			]), //end of mapMutations			

			/**
			 * @description change props for numselector
			 */
			initSelector(cellRow, cellCol, number) {
				console.log("initSelector");
				this.offsetDisplayAutoControl = this.cellDisplayAutoControl(cellRow, cellCol) ;
				console.log(this.offsetDisplayAutoControl) ;
				this.offset2BSelect = this.cellNum2BSelect(cellRow, cellCol);
				this.offset2BDisplay = this.cellNum2BDisplay(cellRow, cellCol);
				this.currNum = number;
				this.showSelector = true;
				// this.showSelector = false ;
				// for(let i = 0; i < this.offsetAbleCellInfos.length; i++){
				// 	let info = this.offsetAbleCellInfos[i] ;
				// 	if((info.row === cellRow) && (info.col === cellCol)){
				// 		this.showSelector = true ;
				// 		break; 
				// 	}
				// }//end loop
			},

			compPush(newList) {
				//get oldList			
				console.log("in compPush");
				console.log(this.stack);
				// console.log(newList) ;				

				this.stack.revoke();
				let oldList = this.stack.withdraw();
				//if the stack can not revoke
				if (!oldList) {
					this.stack.push(newList);
					return;
				}



				let sameFlag = false;
				let x, y;
				if (newList.length === oldList.length) {
					sameFlag = true;
					for (let i = 0; i < newList.length; i++) {
						let newInfo = newList[i];
						let oldInfo = oldList[i];
						if ((newInfo.row !== oldInfo.row) ||
							(newInfo.col !== oldInfo.col) ||
							(newInfo.number !== oldInfo.number)) {
							sameFlag = false;
							x = oldInfo;
							y = newInfo;
							break;
						} //end if
					}
				} //end if

				console.log(`same: ${sameFlag}`);
				console.log(x);
				console.log(y);
				console.log(oldList);
				console.log(newList);
				if (!sameFlag) this.stack.push(newList);
			}, //end of compPush
		}, //end of methods 


		components: {
			Board,
			PlainNumSelcotr,
			SteerWheel,
		}, //end of components
	}
</script>

<style>
	#Board {
		text-align: center;
		margin: 0 auto;
	}

	.operations {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 20rpx auto;
	}

	.reverseIcon {
		transform: scaleX(-1);
	}

	/* 
	#SteerWheel{
		margin: 10rpx 10rpx auto;
	} */
</style>
