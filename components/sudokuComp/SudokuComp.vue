<template>
	<view>
		<Board id="Board"></Board>
		
		<view class="view">try slide the following NumSelector</view>
		<NumSelector 
			:list2BSelect="offset2BSelect" 
			:currentItem="currNum"
			id="NumSelector"
		>
		</NumSelector>
		
	</view>
</template>

<script>
	import {mapGetters} from 'vuex' ;
	import Board from './Board/Board.vue' ;
	import NumSelector from './NumSelector/NumSelector.vue' ;
	
	export default{	
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
			this.getSelectedCellInfo() ;
		},//end of beforeMount()		
		
		mounted(){			
		},//end of mounted()
		
		methods:{			
			
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
