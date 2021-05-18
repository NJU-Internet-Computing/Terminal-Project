import {changeSelectedCell, 
				cellNumberToBeSelect,
				cellNumberToBeDisplay}
				from './sudokuCompConst.js' ;
// console.log(cellNumberToBeDisplay) ;
const moduleSudokuComp = {
	state:()=>({
		//won't change just for 
		initSudokuState: [
			[0,2,3,4,5,6,7,8,9],
			[2,3,4,5,6,7,8,9,1],
			[3,4,5,6,7,8,9,1,2],
			[4,5,6,7,8,9,1,2,3],
			[5,6,7,8,9,1,2,3,4],
			[6,7,8,9,1,2,3,4,5],
			[7,8,9,1,2,3,4,5,6],
			[8,9,1,2,3,4,5,6,7],
			[9,1,2,3,4,5,6,7,8],
		],// end of sudokuState
		
		//the player change this state
		currentSudokuState: [
			[0,2,3,4,5,6,7,8,9],
			[2,3,4,5,6,7,8,9,1],
			[3,4,5,6,7,8,9,1,2],
			[4,5,6,7,8,9,1,2,3],
			[5,6,7,8,9,1,2,3,4],
			[6,7,8,9,1,2,3,4,5],
			[7,8,9,1,2,3,4,5,6],
			[8,9,1,2,3,4,5,6,7],
			[9,1,2,3,4,5,6,7,8],
		],//end of currentSudokuState
		
		selectedCellRow: 0, 
		selectedCellCol: 0,
	}),// end of state,
	
	mutations: {
		/**
		 * @param {Object} state of sudokuComp
		 * @param {Object} payload {row: Number, col: Number} 
		 */
		[changeSelectedCell](state, payload){			
			console.log(payload) ;
			state.selectedCellRow = payload.row ;
			state.selectedCellCol = payload.col ;
		}
	},// end of mutations
	
	actions: {
		
	},//end of actions
	
	getters:{
		
		/**
		 * @return {func} (sudokuState)=>{}
		 * which:
		 * @description 
		 * @return {List[Boolean]} with 9 element. true for display and false for hide
		 */
		screenNumber: state => (sudokuState) =>{
			let row = state.selectedCellRow ;
			let col = state.selectedCellCol ;
			
			let resultFlag = [] ;
			for(var i = 0; i < 10; i++) resultFlag.push(true) ;
			
			for(var j = 0; j < 9; j++){
				let num = sudokuState[row][j] ;
				if(num !== 0) resultFlag[num] = false ;
			}
			
			for(var i = 0; i < 9; i++){
				let num = sudokuState[i][col] ;
				if(num !== 0) resultFlag[num] = false ;
			}
			
			row = Math.floor(row / 3) ;
			col = Math.floor(col / 3) ;
			for(var i = row; i < row+3; i++){
				for(var j = col; j < col+3; j++){
					let num = sudokuState[i][j] ;
					if(num !== 0) resultFlag[num] = false ;
				}
			}
			
			let result = [] ;
			for(var i = 0; i < 10; i++){
				if(resultFlag[i]) result.push(i) ;
			}
			
			return result ;
		},// end of screenNumber
		
		[cellNumberToBeSelect]: (state, getters) =>{			
			// return  getters.screenNumber(state.currentSudokuState) ;
			return [0, 1, 2, 3, 4, 5] ;
		},// end of cellNumberToBeSelect(state)
		
		[cellNumberToBeDisplay]: (state, getters) => {
			return getters.screenNumber(state.initSudokuState) ;
		},// end of cellNumberToBeDisplay(state)
		
	},//end of getters
}
export default moduleSudokuComp ;