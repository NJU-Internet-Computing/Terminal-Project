import servise	from './sudokuCompService.js' ;
// console.log(cellNumberToBeDisplay) ;
const moduleSudokuComp = {
	state:()=>({
		
		gameMode: "",//NORMAL or PUZZLE
		
		//won't change just for 
		origSudokuState: [],// end of sudokuState
		
		//the player change this state
		currentSudokuState: [],//end of currentSudokuState
		
		selectedCellRow: 0, 
		selectedCellCol: 0,
		selectedCellCurrentNumber: 0,
		selectedCellDisableFlag: true,
	}),// end of state,
	
	mutations: {
		/**
		 * @param {Object} state of sudokuComp
		 * @param {Object} payload {row: Number, col: Number} 
		 */
		[servise.mutateSelectedCellInfo](state, payload){
			state.selectedCellRow = payload.row ;
			state.selectedCellCol = payload.col ;
			state.selectedCellCurrentNumber = payload.currentNumber ;
			state.selectedCellDisableFlag = payload.disableFlag ;
			console.log("vueX: ") ;
			console.log(state.selectedCellCurrentNumber + " " +state.selectedCellDisableFlag )
		},//end of servise.mutateSelectedCell
		
		[servise.mutateSelectedCellCurrentNumber](state, payload){
			
			let row = state.selectedCellRow ;
			let col = state.selectedCellCol ;
			
			state.selectedCellCurrentNumber = payload.currentNumber ;
			state.currentSudokuState[row][col] = state.selectedCellCurrentNumber ;
			// console.log(state.currentSudokuState[row][col]) ;
		},//end of servise.mutateSelectedCellCurrentNumber
		
		/**
		 * @param {Object} payload {gameMode: String, sudokuState: Array}  
		 */
		[servise.initSudokuState](state, payload){			
			let sudokuState = payload.sudokuState ;
			state.origSudokuState = JSON.parse(JSON.stringify(sudokuState)) ;
			state.currentSudokuState = JSON.parse(JSON.stringify(sudokuState)) ;
			
			state.origSudokuState = [
			 [0,6,0,4,0,0,7,0,0],
			 [9,5,7,0,0,1,0,0,0],
			 [0,0,1,2,7,5,0,9,0],
			 [6,3,0,0,0,0,8,7,0],
			 [7,0,0,8,0,0,9,0,1],
			 [1,0,0,7,0,6,0,0,2],
			 [0,2,6,5,8,0,0,0,7],
			 [8,0,0,0,2,4,0,5,6],
			 [5,0,4,6,3,7,2,8,0],
			];
			
			state.currentSudokuState = [
			 [0,6,0,4,0,0,7,0,0],
			 [9,5,7,0,0,1,0,0,0],
			 [0,0,1,2,7,5,0,9,0],
			 [6,3,0,0,0,0,8,7,0],
			 [7,0,0,8,0,0,9,0,1],
			 [1,0,0,7,0,6,0,0,2],
			 [0,2,6,5,8,0,0,0,7],
			 [8,0,0,0,2,4,0,5,6],
			 [5,0,4,6,3,7,2,8,0],
			];
			
			state.gameMode = payload.gameMode ;			
			
			console.log(state.gameMode) ;
			console.log(state.origSudokuState) ;
			console.log(state.currentSudokuState) ;
		},//end of 
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
		screenNumber: state => (sudokuState, row, col) =>{			
			let exc = sudokuState[row][col] ;
			let resultFlag = [] ;
			for(let i = 0; i < 10; i++) resultFlag.push(true) ;
			
			for(let j = 0; j < 9; j++){
				let num = sudokuState[row][j] ;
				if((num !== 0) && (num != exc)) resultFlag[num] = false ;
			}
			
			for(let i = 0; i < 9; i++){
				let num = sudokuState[i][col] ;
				if((num !== 0) && (num != exc)) resultFlag[num] = false ;
			}
			
			let squareRow = 3 * Math.floor(row / 3) ;
			let squareCol = 3 * Math.floor(col / 3) ;
			for(let i = squareRow; i < squareRow+3; i++){
				for(let j = squareCol; j < squareCol+3; j++){
					let num = sudokuState[i][j] ;
					if((num !== 0) && (num != exc)) resultFlag[num] = false ;
				}
			}
			
			let result = [] ;
			for(var i = 0; i < 10; i++){
				if(resultFlag[i]) result.push(i) ;
			}
			
			return result ;
		},// end of screenNumber
		
		[servise.cellNumberToBeSelect]: (state, getters) =>{			
			return  getters.screenNumber(state.origSudokuState, state.selectedCellRow, state.selectedCellCol) ;
			// return [0, 1, 2, 3, 4] ;
		},// end of cellNumberToBeSelect(state)
		
		// [servise.cellNumberToBeDisplay]: (state, getters) => {
		// 	return getters.screenNumber(state.origSudokuState, state.selectedCellRow, state.selectedCellCol) ;
		// },// end of cellNumberToBeDisplay(state)
		
		[servise.selectedCell]: state =>{
			return {
				selectedCellRow: state.selectedCellRow,				
				selectedCellCol: state.selectedCellCol,
				selectedCellDisableFlag: state.selectedCellDisableFlag,
			}
		},//end of servise.selectedCell
		
		[servise.selectedCellCurrentNumber]: state=>{
			return state.selectedCellCurrentNumber ;
		},//end of servise.selectedCellCurrentNumber
		
		[servise.cellCurrentState]: (state, getters) => (row, col) =>{
			// console.log("in servise.cellCurrentState: " + state.currentSudokuState[row][col])
			return state.currentSudokuState[row][col] ;
		} ,//end of servise.cellSelfState
		
		[servise.cellNum2BDisplay]: (state, getters) => (row, col) =>{
			return getters.screenNumber(state.currentSudokuState, row, col) ;
		} ,//end of servise.cellNum2BDisplay
		
		[servise.selectedCellDisableFlag]: state => state.selectedCellDisableFlag ,
		[servise.gameMode]: state => state.gameMode ,
	},//end of getters
}
export default moduleSudokuComp ;