<template>
	<view>
		<Board id="Board"></Board>
		
		<view class="view">try slide the following NumSelector</view>
		<NumSelector 
			:list2BSelect="offset2BSelect" 
			:currentItem="currNum"
			id="NumSelector"
			@selected="getSelectedNumber"
		>
		</NumSelector>
		
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex' ;
	import Board from './Board/Board.vue' ;
	import NumSelector from './NumSelector/NumSelector.vue' ;
	
	export default{
		props:{
			/*使用字符串常量模拟枚举类型，表示两种游戏模式NORMAL与PUZZLE。*/
			gameMode: {
				type: String,
				default: "NORMAL",
			},
			        
			/*接受一个9*9的二位数组，数组中每个元素在0~9之间，数组中的每个元素映射到数独游戏中的一个格子。若gameMode是NORMAL，则使用0代表需要玩家填写。若gameMode是PUZZLE，则有且仅有一个Block（即一个3*3的宫格）全为0*/
			sudokuState: {
				type: Array,
				required: true,
			},
		},//end of props
		
		data(){
			return {
				offset2BSelect: Array, 
				currNum: Number,
			}
		},//end of data
		
		computed:{
			...mapGetters([
				'cellNumberToBeSelect', 
				'selectedCell', 
				'selectedCellCurrentNumber',
			]),//end of mapGetters
			
		},//end of computed
		
		watch:{
			selectedCell(newVal, oldVal){
				this.getSelectedCellInfo() ;
			},//end of selectedCell			
		},//end of watch
		
		beforeMount() {			
			this.initSudokuState({
				gameMode: this.gameMode,
				sudokuState: this.sudokuState,
			}) ;
			this.getSelectedCellInfo() ;
		},//end of beforeMount()		
		
		mounted(){			
		},//end of mounted()
		
		methods:{			
			...mapMutations([
				'initSudokuState',
				'mutateSelectedCellCurrentNumber',
			]),//end of mapMutations
			
			getSelectedNumber(selectedNumber){
				let num = 0;
				if((selectedNumber >= "1") && (selectedNumber <= "9")) 
					num = Number(selectedNumber) ;
				this.mutateSelectedCellCurrentNumber({
					currentNumber: num,
				})
			},
			
			getSelectedCellInfo(){				
				this.setOffset2BSelect(this.cellNumberToBeSelect) ;
				this.setCurrNum(this.selectedCellCurrentNumber) ;
			},//end of getSelectedCellInfo
			
			setNumByRule(val){
				if(val === 0) return "空" ;
				if((val >= 1) || (val <= 9)) return val.toString() ;
			},//end of setNumbRule
			
			setCurrNum(newVal){
				this.currNum = this.setNumByRule(newVal) ;
			},//end of newVal
			
			setOffset2BSelect(newVal){				
				this.offset2BSelect = [] ;
				for(var i = 0; i < newVal.length; i++){
					this.offset2BSelect.push(this.setNumByRule(newVal[i])) ;
				}		
			}, // end of setOffset2BSelect(newVal)
			
		},//end of methods	
				
		
		components:{
			Board, 
			NumSelector,
		},//end of components
	}
</script>

<style>
	#Board{
		text-align: center;
		margin: 0 auto ;
	}
	
	#NumSelector{
		
	}
</style>
