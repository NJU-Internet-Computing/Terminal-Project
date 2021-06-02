<template>
	<view>
		<Board></Board>
		
		<!-- <view class="view">try slide the following NumSelector</view> -->
		<!-- <button @click="showNumSelector">switch</button> -->
		<view class="operations">
			<u-button 
				open-type="default"  
				ripple  
				ripple-bg-color="#9eeaf9" 
				@click="revoke"
			>
				撤销			
			</u-button>
			<u-button 
				open-type="default"  
				ripple  
				ripple-bg-color="#9eeaf9" 
				@click="getSelectedNumber(0)"
			>
				清空
			</u-button>
			<u-button 
				open-type="default"  
				ripple  
				ripple-bg-color="#9eeaf9" 
				@click="withdraw"
			>
				撤回	
			</u-button>
		</view>
		
<!-- 		<NumSelector
			:disableFlag="!selectedCellDisableFlag"
			:list2BSelect="offset2BSelect" 
			:currentItem="currNum"
			id="NumSelector"
			@selected="getSelectedNumber"
		>
		</NumSelector> -->
		
		<PlainNumSelcotr
			:disableFlag="selectedCellDisableFlag"
			:list2BSelect="offset2BSelect" 
			:currentItem="currNum"
			id="NumSelector"
			@selected="getSelectedNumber"
			v-show="showSelector">			
		</PlainNumSelcotr>
		
		
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex' ;
	import Board from './Board/Board.vue' ;
	import NumSelector from './NumSelector/NumSelector.vue' ;
	import PlainNumSelcotr from './PlainNumSelector/PlainNumSelector.vue' ;
	import stack from './stack.js' ;
	
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
				show: true,
				offset2BSelect: Array, 
				currNum: Number,
				stack,
				showSelector: false,
			}
		},//end of data
		
		computed:{
			...mapGetters([
				'cellNumberToBeSelect', 
				'selectedCellCoordinate',
				'selectedCellInfo',
				'selectedCellCurrentNumber',
				'selectedCellDisableFlag'
			]),//end of mapGetters
			
		},//end of computed
		
		watch:{
			selectedCellInfo: {
				handler(newVal, oldVal){
					this.showSelector = true ;
					if(newVal.from_comp === "Cell")	
						this.stack.push(JSON.parse(JSON.stringify(newVal))) ;					
					
					this.getSelectedCellInfo() ;
				},
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
			console.log("hook: mounted: ")
			
		},//end of mounted()
		
		methods:{			
			
			revoke(){
				let temp = this.stack.revoke() ;
				if(!temp) return ;
				temp.from_comp = "SudokuComp",				
				this.mutateSelectedCellInfo(temp) ;
				this.setCurrNum(this.selectedCellCurrentNumber) ;
			},//end of revoke()
			
			withdraw(){
				console.log("withdraw") ;				
				let temp = this.stack.withdraw() ;
				if(!temp) return ;
				temp.from_comp = "SudokuComp",
				this.mutateSelectedCellInfo(temp) ;
				this.setCurrNum(this.selectedCellCurrentNumber) ;
			},//end of withdraw()
			
			
			showNumSelector(){
				this.show = !this.show ;
			},
			
			...mapMutations([
				'initSudokuState',
				'mutateSelectedCellCurrentNumber',
				'mutateSelectedCellInfo',
			]),//end of mapMutations
			
			getSelectedNumber(selectedNumber){
				console.log(selectedNumber) ;
				// let num = 0;
				// if((selectedNumber >= "1") && (selectedNumber <= "9")) 
				// 	num = Number(selectedNumber) ;
				let num = selectedNumber ;
				this.mutateSelectedCellCurrentNumber({
					currentNumber: num,
				}) ;				
				this.setCurrNum(num) ;
				this.stack.push(JSON.parse(JSON.stringify(this.selectedCellInfo))) ;	
			},
			
			getSelectedCellInfo(){
				this.setOffset2BSelect(this.cellNumberToBeSelect) ;
				this.setCurrNum(this.selectedCellCurrentNumber) ;
				console.log("in SudokuComp  func:getSelectedCellInfo")
				console.log(this.offset2BSelect) ;
				console.log(this.currNum) ;
			},//end of getSelectedCellInfo
			
			setNumByRule(val){
				if(val === 0) return "空" ;
				if((val >= 1) || (val <= 9)) return val.toString() ;
			},//end of setNumbRule
			
			setCurrNum(newVal){
				this.currNum = newVal ;
				// this.currNum = this.setNumByRule(newVal) ;
			},//end of newVal
			
			setOffset2BSelect(newVal){
				this.offset2BSelect = [] ;				
				for(var i = 0; i < newVal.length; i++){
					// this.offset2BSelect.push(this.setNumByRule(newVal[i])) ;
					this.offset2BSelect.push(newVal[i]) ;
				}		
			}, // end of setOffset2BSelect(newVal)
			
		},//end of methods	
				
		
		components:{
			Board, 
			NumSelector,
			PlainNumSelcotr,
		},//end of components
	}
</script>

<style>
	#Board{
		text-align: center;
		margin: 0 auto ;
	}
	.operations{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 10rpx 10rpx auto;
	}
</style>
