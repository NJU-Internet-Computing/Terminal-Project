import servise from './sudokuCompService.js';

const countOne = function(number) {
	let result = 0;
	while (number > 0) {
		if (number % 2 === 1) result++;
		number = Math.floor(number / 2);
	}
	return result;
}

const sleep = function(time) {
	return new Promise(resolve => setTimeout(resolve, time))
}


const moduleSudokuComp = {
	state: () => ({

		gameMode: "", //NORMAL or PUZZLE

		/**
		 * @description 2D array. An buffer for the origin sudokuState
		 * @format: element {number: Number, display: []}
		 * @format: el in display. numbers not merge in units which the cell belongs to
		 */
		origSudokuState: [],
		//variable for current sudokuState
		currentSudokuState: [],		
		
		hideDisplayFlag: true,
		
		/**
		 * @description 9*9*9 3D array. Store display auto control flag for each cell.		 * 
		 */
		displayAutoControlState: [],

		origSquareState: [],
		currentSquareState: [],

		selectedCellCoordinate: {
			row: 0,
			col: 0,
		},
		cellClick: false,
	}), // end of state,

	mutations: {

		/**
		 * @param {Object} payload {gameMode: String, sudokuState: Array}  
		 */
		[servise.initSudokuState](state, payload) {
			state.gameMode = payload.gameMode; //store gameMode
			//init 
			let temp = payload.sudokuState;
			// temp = [
			// 	[0, 6, 0, 4, 0, 0, 7, 0, 0],
			// 	[9, 5, 7, 0, 0, 1, 0, 0, 0],
			// 	[0, 0, 1, 2, 7, 5, 0, 9, 0],
			// 	[6, 3, 0, 0, 0, 0, 8, 7, 0],
			// 	[7, 0, 0, 8, 0, 0, 9, 0, 1],
			// 	[1, 0, 0, 7, 0, 6, 0, 0, 2],
			// 	[0, 2, 6, 5, 8, 0, 0, 0, 7],
			// 	[8, 0, 0, 0, 2, 4, 0, 5, 6],
			// 	[5, 0, 4, 6, 3, 7, 2, 8, 0],
			// ]; 
			
			// temp =  [
			// 	[1,2,3,4,5,6,7,8,9],
			// 	[4,5,6,7,8,9,1,2,3],
			// 	[7,8,9,1,2,3,4,5,6],
			// 	[2,3,1,0,0,0,8,9,7],
			// 	[5,6,4,0,0,0,2,3,1],
			// 	[8,9,7,0,0,0,5,6,4],
			// 	[3,1,2,6,4,5,9,7,8],
			// 	[6,4,5,9,7,8,3,1,2],
			// 	[9,7,8,3,1,2,6,4,5],
			// ] ;
			//for develop
			//push all the numbers in the result, which will be stored as orig~ & current~
			let result = [];
			for (let i = 0; i < 9; i++) {
				let child = [];
				for (let j = 0; j < 9; j++) {
					child.push({
						number: temp[i][j],
						display: [],
					});
				}
				result.push(child);
			}

			//for each cell, calculate its display array
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					result[i][j].display = this.getters.screenNumber(result, i, j);					
				}
			}
			
			//init for display AutoControl State
			for(let i = 0; i < 9; i++){
				let child = [] ;
				for(let j = 0; j < 9; j++){
					let list = [] ;
					for(let k = 0; k < 10; k++) list.push(false) ;
					result[i][j].display.forEach((num)=>{
						list[num] = true ;
					}) ;					
					list.shift() ;//shift num zero
					child.push(list) ;
				}
				state.displayAutoControlState.push(child) ;
			}
			console.log("in initSudokuState")
			console.log(state.displayAutoControlState) ;
			//store origSudokuState & currentSudokuState
			//BE CAREFUL not pass by reference 
			state.origSudokuState = JSON.parse(JSON.stringify(result));
			state.currentSudokuState = JSON.parse(JSON.stringify(result));
		}, //end of initSudokuState
		
		[servise.clickACell](state){
			state.cellClick = true ;
		},
		[servise.recoverCellClick](state){
			state.cellClick = false ;
		},
		/**
		 * @param {Object} state
		 * @description update CurrentSudokuState immediately
		 */
		updateCurrentSudokuState(state) {
			state.currentSudokuState = JSON.parse(JSON.stringify(state.currentSudokuState));
		}, //

		/**
		 * @param {Object} state of sudokuComp
		 * @param {Object} payload {row: Number, col: Number}
		 * 
		 * @description Each cell has it own coordinate:Object, it will call this function when it has been clicke
		 * and pass its coordinate. We want to ensure that if a cell has been clicked for more than once,
		 * although it will mutate more than once ofcourse, however the coordinate obj in store will be the 
		 * same reference, and it will facilitate revoke and withdraw operation
		 */
		[servise.mutateSelectedCellCoordinate](state, payload) {
			state.selectedCellCoordinate = payload;
		}, //end of servise.mutateSelectedCell

		/**
		 * @param {Object} state
		 * @param {Object} payload 
		 * {row: Number, col:Number, number: Number, update: {type: Bool, default: true}}
		 *
		 * @description change sudoku number in (row, col), 
		 * then update display in row/col/square unit, 
		 * if update is true, then update currentSudokuState immediately
		 */
		[servise.mutateCellNumber](state, payload) {
			let row = payload.row;
			let col = payload.col;
			let oldNum = state.currentSudokuState[row][col].number;
			let newNum = payload.number;
			console.log(`(${row}, ${col}) =>${newNum} `)

			state.currentSudokuState[row][col].number = newNum;

			//update display in row/col/square unit
			for (let j = 0; j < 9; j++)
				state.currentSudokuState[row][j].display = this.getters.screenNumber(state.currentSudokuState, row,
					j);

			for (let i = 0; i < 9; i++)
				state.currentSudokuState[i][col].display = this.getters.screenNumber(state.currentSudokuState, i,
					col);

			let squareRow = 3 * Math.floor(row / 3);
			let squareCol = 3 * Math.floor(col / 3);
			for (let i = squareRow; i < squareRow + 3; i++) {
				for (let j = squareCol; j < squareCol + 3; j++) {
					state.currentSudokuState[i][j].display = this.getters.screenNumber(state.currentSudokuState, i,
						j);
				}
			}

			//if default or payload.update then update
			if (!payload.hasOwnProperty('update') || payload.update) this.commit('updateCurrentSudokuState');
		}, //end of servise.mutateCellNumber

		/**
		 * @param {Array} payload [{row, col, number}]
		 * @description mutateCellNumber for each item in payload, and not update sudokuState until the end
		 */
		[servise.mutateCellNumberByList](state, payload) {
			let infoList = JSON.parse(JSON.stringify(payload)) ;
			infoList.forEach(info => {
				info.update = false;
				this.commit('mutateCellNumber', info);
			})
			this.commit('updateCurrentSudokuState');
		}, //end mutateCellNumberByList

		/**
		 * @description Set zero to all not disable cell.
		 */
		[servise.clearAllAbleCells](state) {
			let infoList = [];
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					//filter all not disable cell
					let origNum = state.origSudokuState[i][j];
					if (origNum !== 0) continue;
					infoList.push({
						row: i,
						col: j,
						number: 0,
					});
				}
			} //end for loop
			this.commit('mutateCellNumberByList', infoList);
		}, //end of clearAllAbleCells


		/**
		 * @param {Object} payload {squareState: Array}  
		 */
		[servise.initSquareState](state, payload) {
			let squareState = payload.squareState;
			state.origSquareState = JSON.parse(JSON.stringify(squareState));
			state.currentSqusareState = JSON.parse(JSON.stringify(squareState));
		}, //end of servese.initSquareState

		/**
		 * @param {Object} payload {squareState: Array}  		 * 
		 */
		[servise.mutateCurrentSquareState](state, payload) {
			let squareState = payload.squareState;
			state.currentSquareState = JSON.parse(JSON.stringify(squareState));
		}, //end of servise.mutateSquareState


		/**
		 * @param {Object} payload: {squareInfo1: {squareRow, squareCol}, squareInfo2: {squareRow, squareCol}}  
		 */
		[servise.mutateCurrentSudokuStateBySquare](state, payload) {
			let info1 = payload.squareInfo1;
			let info2 = payload.squareInfo2;

			for (let i = 0; i < 3; i++) {
				let r1 = info1.squareRow * 3 + i;
				let r2 = info2.squareRow * 3 + i;

				for (let j = 0; j < 3; j++) {
					let c1 = info1.squareCol * 3 + j;
					let c2 = info2.squareCol * 3 + j;
					let num1 = state.currentSudokuState[r1][c1].number;
					let num2 = state.currentSudokuState[r2][c2].number;

					//update current sudoku state until all mutateCellNumber
					this.commit('mutateCellNumber', {
						row: r1,
						col: c1,
						number: num2,
						update: false,
					});
					this.commit('mutateCellNumber', {
						row: r2,
						col: c2,
						number: num1,
						update: false,
					});
				}
			} //end for loop
			this.commit('updateCurrentSudokuState');
		}, //end of mutateCurrentSudokuStateBySquare
		
		[servise.mutateHideDisplayFlag](state, payload){
			console.log("in mutateHideDisplayFlag")
			console.log(payload) ;
			state.hideDisplayFlag = payload ;
		},
		
		/**
		 * @param {Object} payload:{row, col, number, autoFlag}  
		 */
		[servise.mutateDisplayAutoControlState](state, payload){
			console.log("in mutate DisplayAutoControlState old:") ;
			console.log(state.displayAutoControlState)
			state.displayAutoControlState[payload.row][payload.col][payload.number-1] = payload.autoFlag ;
			console.log(`newVla: ${state.displayAutoControlState[payload.row][payload.col][payload.number-1]}`)
			state.displayAutoControlState = JSON.parse(JSON.stringify(state.displayAutoControlState)) ;
		},
	}, // end of mutations




	getters: {

		[servise.gameMode]: state => state.gameMode,

		/**
		 * @description return the same reference so that it can be watched correctly
		 */
		[servise.currentSudokuState]: state => state.currentSudokuState,

		/**
		 * @description Judge success on current sudokuState. 
		 * if gameMode is NORMAL, then each unit must only have number 1~9 exactly once.
		 * if gameMode is PUZZLE, then for row/col not get through the empty square, maintain the same rule as in NORMAL mode.
		 * for those do get through, it should have exactly three 0, and six number from 1~9 without repeat
		 */
		[servise.successFlag]: (state, getters) => () => {
			if (state.gameMode === 'NORMAL') {
				//每个unit，1~9必须恰好出现1次
				return getters.normalSuccessFlag();
			} else if (state.gameMode === 'PUZZLE') {
				//不经过空Square的行或列，1~9必须恰好出现1次
				//经过的行或列，必须恰好有3个0，其余数字出现次数只能为1或0
				return getters.puzzleSuccessFlag();
			}
		}, //end of successFlag
		
		[servise.cellClick]: (state, getters) =>{
			return state.cellClick ;
		},
		/**
		 * @description return coordinate of current selected cell, cause
		 * each cell mutate its own reference of coordinate, so just need to 
		 * return the reference
		 */
		[servise.selectedCellCoordinate]: state => {
			return state.selectedCellCoordinate;
		},

		/**
		 * @description return cell number according to the selected Cell Coordinate
		 * @return {Number}
		 */
		[servise.selectedCellCurrentNumber]: state => {
			// console.log("in selectedCellCurrentNumber")
			// console.log(state.currentSudokuState) ;
			let row = state.selectedCellCoordinate.row;
			let col = state.selectedCellCoordinate.col;
			// console.log("end selectedCellCurrentNumber") ;
			return state.currentSudokuState[row][col].number;
		},

		[servise.cellNum2BSelect]: (state, getters) => (row, col) => {
			return state.origSudokuState[row][col].display;
		},
		[servise.cellNum2BDisplay]: (state, getters) => (row, col) => {
			return state.currentSudokuState[row][col].display;
		},

		/**
		 * @return {Array} infos [{row, col, number}]
		 */
		[servise.allAbleCellCurrentInfos]: (state, getters) =>()=> {
			
			console.log("in getters: allAbleCellCurrentInfos") ;
			let infos = [];
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					if(state.origSudokuState[i][j].number !== 0) continue ;
					let info = {
						row: i,
						col: j,
						number: state.currentSudokuState[i][j].number,
					};
					infos.push(info);
				}
			} //end loop
			console.log(infos) ;
			console.log("end allAbleCellCurrentInfos")
			return infos;
		}, //end of allAbleCellCurrentInfos

		[servise.oneDisableCellCoor]: (state) => () => {
			for(let i = 0; i < 9; i++){
				for(let j = 0; j < 9; j++){
					if (state.origSudokuState[i][j].number !== 0){
						let info = {
							row: i,
							col: j,
						}
						return info ;
					}//end if
				}
			}//end loop
		},//end of oneDisableCellCoor

		[servise.currentSquareState]: (state) => {
			return JSON.parse(JSON.stringify(state.currentSquareState));
		}, //end of currentSquareState


		/**
		 * @return {func} (sudokuState)=>{}
		 * which:
		 * @description find numbers not in r/c/s units except zero and nubmer of self
		 * @return {List[Boolean]} with 9 element. true for display and false for hide
		 */
		screenNumber: state => (array, row, col) => {
			let resultFlag = [];
			for (let i = 0; i < 10; i++) resultFlag.push(true);

			for (let j = 0; j < 9; j++) {
				let num = array[row][j].number;
				if ((num !== 0)) resultFlag[num] = false;
			}

			for (let i = 0; i < 9; i++) {
				let num = array[i][col].number;
				if ((num !== 0)) resultFlag[num] = false;
			}

			let squareRow = 3 * Math.floor(row / 3);
			let squareCol = 3 * Math.floor(col / 3);
			for (let i = squareRow; i < squareRow + 3; i++) {
				for (let j = squareCol; j < squareCol + 3; j++) {
					let num = array[i][j].number;
					if ((num !== 0)) resultFlag[num] = false;
				}
			}

			let result = [];
			for (var i = 0; i < 10; i++) {
				if (resultFlag[i]) result.push(i);
			}

			return result;
		}, // end of screenNumber

		normalSuccessFlag: state => () => {
			//1~9恰好出现1次，9bit二进制 511
			let successNum = 0; //9bit 111111111

			for (let i = 0; i < 9; i++) {
				successNum = 0;
				for (let j = 0; j < 9; j++) {
					let num = state.currentSudokuState[i][j].number;
					if (num === 0) break;
					successNum += (0b1 << (num - 1));
				}
				if (successNum !== 511) {
					// console.log(`a row ${i} ${successNum}`) ;
					return false;
				}
			} //end all rows


			for (let j = 0; j < 9; j++) {
				successNum = 0;
				for (let i = 0; i < 9; i++) {
					let num = state.currentSudokuState[i][j].number;
					if (num === 0) break;
					successNum += (0b1 << (num - 1));
				}
				if (successNum !== 511) {
					// console.log(`a col ${j} ${successNum}`) ;
					return false;
				}
			} //end all row


			//all square
			for (let k = 0; k < 9; k++) {
				successNum = 0;
				// console.log(`square ${k}`) ;
				let squareRow = Math.floor(k / 3);
				let squareCol = k - 3 * squareRow;
				for (let i = 3 * squareRow; i < 3 * squareRow + 3; i++)
					for (let j = 3 * squareCol; j < 3 * squareCol + 3; j++) {
						let num = state.currentSudokuState[i][j].number;
						if (num === 0) break;
						successNum += (0b1 << (num - 1));
						// console.log(`${i},${j} ${successNum}`)
					}
				if (successNum !== 511) {
					// console.log(`a square ${k} ${successNum}`) ;
					return false;
				}
			}

			return true;
		},
		puzzleSuccessFlag: state => () => {
			//111010011
			//000111111  63		
			//111111000 511-7 = 504
			console.log("in Vuex puzzleSuccessFlag")
			let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
			let repeatFlag = false;

			for (let i = 0; i < 9; i++) {
				repeatFlag = false;
				for (let k = 0; k < 10; k++) counter[k] = 0;

				for (let j = 0; j < 9; j++) {
					let num = state.currentSudokuState[i][j].number;
					counter[num]++;
					if ((num !== 0) && (counter[num] > 1)) {
						repeatFlag = true;
						break;
					}
				}

				// console.log("a row") ;
				// console.log("repeat: " + repeatFlag) ;
				// console.log(counter) ;
				if (repeatFlag) return false;
				if ((counter[0] !== 0) && (counter[0] !== 3)) return false;
			} //end all rows


			for (let j = 0; j < 9; j++) {
				repeatFlag = false;
				for (let k = 0; k < 10; k++) counter[k] = 0;

				for (let i = 0; i < 9; i++) {
					let num = state.currentSudokuState[i][j].number;
					counter[num]++;
					if ((num !== 0) && (counter[num] > 1)) {
						repeatFlag = true;
						break;
					}
				}
				// console.log("a col") ;
				// console.log("repeat: " + repeatFlag) ;
				// console.log(counter) ;
				if (repeatFlag) return false;
				if ((counter[0] !== 0) && (counter[0] !== 3)) return false;
			} //end all row

			return true;
		},
		
		[servise.hideDisplayFlag]: state=>()=>{
			return state.hideDisplayFlag ;
		},
		
		[servise.cellDisplayAutoControl]: state=>(row, col) =>{
			return state.displayAutoControlState[row][col] ;
		},
		[servise.displayAutoControlState]: state=>{
			return state.displayAutoControlState ;
		},
			
	}, //end of getters
}
export default moduleSudokuComp;
