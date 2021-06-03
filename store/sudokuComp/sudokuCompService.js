//mutations
const initSudokuState = 'initSudokuState';
const clickACell = 'clickACell' ;
const recoverCellClick = 'recoverCellClick' ;
const mutateSelectedCellCoordinate = 'mutateSelectedCellCoordinate';
const mutateCellNumber = 'mutateCellNumber';
const mutateCellNumberByList = 'mutateCellNumberByList' ;
const clearAllAbleCells = 'clearAllAbleCells';

const mutateHideDisplayFlag = 'mutateHideDisplayFlag' ;
const mutateDisplayAutoControlState = 'mutateDisplayAutoControlState' ;

const initSquareState = 'initSquareState';
const mutateCurrentSquareState = 'mutateCurrentSquareState';
const mutateCurrentSudokuStateBySquare = 'mutateCurrentSudokuStateBySquare';



//getters

const gameMode = 'gameMode';
const currentSudokuState = 'currentSudokuState';
const successFlag = 'successFlag';

const displayAutoControlState = 'displayAutoControlState';
const cellDisplayAutoControl = 'cellDisplayAutoControl' ;
const hideDisplayFlag = 'hideDisplayFlag' ;

const cellClick = 'cellClick' ;
const selectedCellCoordinate = 'selectedCellCoordinate';
const selectedCellCurrentNumber = 'selectedCellCurrentNumber';
const cellNum2BSelect = 'cellNum2BSelect';
const cellNum2BDisplay = 'cellNum2BDisplay';

const oneDisableCellCoor = 'oneDisableCellCoor' ;
const allAbleCellCurrentInfos = 'allAbleCellCurrentInfos';

const currentSquareState = 'currentSquareState';

export default {
	//mutations
	initSudokuState,
	mutateSelectedCellCoordinate,
	mutateCellNumber,
	mutateCellNumberByList,
	clearAllAbleCells,
	initSquareState,
	mutateCurrentSquareState,
	mutateCurrentSudokuStateBySquare,
	recoverCellClick,
	clickACell,
	mutateHideDisplayFlag,
	mutateDisplayAutoControlState,
	
	//getters
	gameMode,
	currentSudokuState,
	successFlag,
	cellClick,
	selectedCellCoordinate,
	selectedCellCurrentNumber,
	cellNum2BSelect,
	cellNum2BDisplay,
	allAbleCellCurrentInfos,
	currentSquareState,
	
	oneDisableCellCoor,
	cellDisplayAutoControl,
	hideDisplayFlag,
	displayAutoControlState,
}
