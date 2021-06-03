<template>
	<view class="cell" :class="{'selectedCell': (selected && !disableFlag)}" @click="clickCell">
		<view v-show="!emptyFlag" class="cellContent" :class="{'disable': disableFlag}">
			{{currentNumber}}
		</view>

		<view class="display" v-show="!hideDisplayFlag">
			<view v-for="(row, rowIndex) in tinyCells" :key="rowIndex" class="tinyCellRow" v-show="emptyFlag">
				<TinyCell v-for="(col, colIndex) in row" 
				:key="colIndex" 
				:display="offset2BDisplay[col]"					
				:selectedFlag="selected"
				:autoControlFlag="offsetDisplayAutoControl[col]">
				</TinyCell>
			</view>
		</view>

		<slot name="cell"></slot>

	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex';
	import TinyCell from '../TinyCell/TinyCell.vue';
	export default {
		props: {
			cellRow: {
				type: Number,
				required: true,
			},
			cellCol: {
				type: Number,
				required: true,
			},
		}, //end of props

		data() {
			return {
				tinyCells: [
					[0, 1, 2],
					[3, 4, 5],
					[6, 7, 8]
				],
				emptyFlag: true, //cell是否为空 true空，false非空
				disableFlag: false, //用户可否填写Cell，true 不可填写 false可填写
				currentNumber: Number,
				offset2BDisplay: Array,
				offsetDisplayAutoControl: Array,
				selected: false,
			}
		}, //end of data

		computed: {
			cellCoor() {
				return {
					row: this.cellRow,
					col: this.cellCol
				};
			},			
			...mapState({
				hideDisplayFlag: state=>state.sudokuComp.hideDisplayFlag,
			}),
				
			...mapGetters([
				'gameMode',
				'currentSudokuState',

				'selectedCellCoordinate',
				
				'displayAutoControlState',
				'cellDisplayAutoControl',
				'cellNum2BDisplay',
			]), //end of mapGetters			

		}, //end of computed

		watch: {
			selectedCellCoordinate(newVal, oldVal) {
				//change in 2 condition: 
				//1. a new cell has been clicked
				//2. in SudokuComp, stepOperation mutate the selected cell coordiante
				let row = newVal.row;
				let col = newVal.col;
				if((row === oldVal.row) && (col === oldVal.col)) return ;
					
				if (row === -1 || col === -1) {
					this.selected = false;
					return;
				}

				if ((row === this.cellRow) &&
					(col === this.cellCol)) {
					this.selected = true;
				} else {
					this.selected = false;
				}
			}, //end of selectedCell

			currentSudokuState: {
				deep: true,
				handler(newVal, oldVal) {
					// console.log(`in Cell (${this.cellRow}, ${this.cellCol}) watch: currentSudokuState`)
					// console.log(newVal) ;
					this.currentNumber = newVal[this.cellRow][this.cellCol].number;
					if (this.currentNumber === 0) this.emptyFlag = true;
					else this.emptyFlag = false;					
					
					this.setOffset2BDisplay(newVal[this.cellRow][this.cellCol].display);	
					// console.log("end cell watch")
				},
			},
			
			displayAutoControlState :{
				handler(){
					this.offsetDisplayAutoControl = this.cellDisplayAutoControl(this.cellRow, this.cellCol) ;					
				},
				deep: true,
			}
			
		}, //end of watch


		beforeMount() {
			this.currentNumber = this.currentSudokuState[this.cellRow][this.cellCol].number ;
			// console.log(`in cell (${this.cellRow}, ${this.cellCol}) number: ${this.currentNumber}`) ;
			
			this.setOffset2BDisplay(this.cellNum2BDisplay(this.cellRow, this.cellCol));
			this.offsetDisplayAutoControl = this.cellDisplayAutoControl(this.cellRow, this.cellCol) ;
			
			if (this.currentNumber === 0) {
				this.disableFlag = false;
				this.emptyFlag = true;
			} else {
				this.disableFlag = true;
				this.emptyFlag = false;
			}
		}, //end of beforeMount	

		methods: {
			...mapMutations([
				'mutateSelectedCellCoordinate',
				'clickACell'
			]), //end of mapMutations

			setOffset2BDisplay(list) {
				// console.log(`in cell setOffset2BDisplay ${list}`);
				this.offset2BDisplay = [];
				for (let i = 0; i < 10; i++) {
					this.offset2BDisplay.push(" ");
				}
				list.forEach((item) => {
					this.offset2BDisplay[item] = item.toString();
				})
				this.offset2BDisplay.shift();//shift "0" in display list
			}, //end of setOffset2BDisplay(list)

			clickCell() {
				//deal with click event only in condition that
				//gameMode is "NORMAL" and the cell is not disable
				if (this.disableFlag || this.$store.state.sudokuComp.gameMode === 'PUZZLE') return;
				
				this.clickACell() ;
				this.selected = true;
				this.mutateSelectedCellCoordinate(this.cellCoor);
			}, //end of clickCell
		}, //end of methods

		components: {
			TinyCell,
		}, //end of components
	}
</script>

<style>
	.cell {
		width: 76rpx;
		height: 76rpx;
		border: 2rpx solid #A088A0;
		color: #A088A0;
	}

	.selectedCell {
		border-style: outset;
		color: #FFFFFF;
		background-color: #ba98ca;
	}

	.cellContent {
		line-height: 76rpx;
		text-align: center;

		font-size: 56rpx;
		/* color: #FFFFFF;*/

	}

	.disable {
		color: #6A98CA;
		opacity: .7;
	}

	.display {
		display: flex;
		flex-direction: column;
		align-content: center;
	}

	.tinyCellRow {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
