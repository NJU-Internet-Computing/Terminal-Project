<template>
	<view class="cell" @click="clickCell">
		<view v-show="!emptyFlag" 
			class="cellContent" 
			:class="{'disable': disableFlag}"
		>
			{{currentNumber}}
		</view>
		
		<view class="display">
			<view v-for="(row, rowIndex) in tinyCells" 
				:key="rowIndex"
				class="tinyCellRow" 
				v-show="emptyFlag"
			>
				<TinyCell 
					v-for="(col, colIndex) in row" 
					:key="colIndex" 
					:display="offset2BDisplay[col]">				
				</TinyCell>
			</view>
		</view>
		
		<slot name="cell"></slot>
		
		
		
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex' ;
	import TinyCell from '../TinyCell/TinyCell.vue' ;
	export default{	
		props:{
			cellRow:{
				type: Number,
				required: true,
			},
			cellCol:{
				type: Number,
				required: true,
			},
		},//end of props
		
		data(){
			return {
				tinyCells: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
				emptyFlag: true, //cell当前为空
				disableFlag: false, //非用户填写Cell
				currentNumber: Number,
				offset2BDisplay: Array,
				selected: false,
			}
		},//end of data
		
		computed:{
			
			...mapGetters([
				'cellNum2BDisplay',
				'cellCurrentState',
				'gameMode',
				'selectedCellCoordinate',
				'selectedCellCurrentNumber',
			]),//end of mapGetters			
			
		},//end of computed
		
		watch:{
			selectedCellCoordinate(newVal, oldVal){
				if((newVal.selectedCellRow === this.cellRow) && (newVal.selectedCellCol === this.cellCol)) 
					this.selected = true ;//when setBack, will change selectedCell without click the cell, so it's this sentance to set selected property correctly
				
				else this.selected = false ;
			},//end of selectedCell
			
			selectedCellCurrentNumber(newVal, oldVal){
				this.setOffset2BDisplay(this.cellNum2BDisplay(this.cellRow, this.cellCol)) ;
				if(!this.selected) return ;
				this.currentNumber = newVal ;
				
				if(this.currentNumber === 0) this.emptyFlag = true ;
				else this.emptyFlag = false ;
			},//end of selfState
		},//end of watch
		
		beforeMount() {
			this.currentNumber = this.cellCurrentState(this.cellRow, this.cellCol) ;
			this.setOffset2BDisplay(this.cellNum2BDisplay(this.cellRow, this.cellCol)) ;
			
			if(this.currentNumber === 0){
				this.disableFlag = false ;	
				this.emptyFlag = true ;
			}else{
				this.disableFlag = true ;
				this.emptyFlag = false ;
			}
		},//end of beforeMount	
		
		mounted(){
		},//end of mounted()
		
		methods:{			
			...mapMutations([
				'mutateSelectedCellInfo',
			]),//end of mapMutations
			
			setOffset2BDisplay(val){
				this.offset2BDisplay = [] ;
				for(let i = 0; i < 10; i++){
					this.offset2BDisplay.push(" ") ;
				}
				val.forEach((item)=>{
					this.offset2BDisplay[item] = item.toString() ;
				})
				this.offset2BDisplay.shift() ;
			},//end of setOffset2BDisplay(val)
			
			selfState(){
				return this.cellCurrentState(this.cellRow, this.cellCol) ;
			},//end of selfCurrentState			
			
			clickCell(){
				this.selected = true ;
				this.mutateSelectedCellInfo({
					row: this.cellRow,
					col: this.cellCol,
					currentNumber: this.currentNumber,
					disableFlag: this.disableFlag,
					from_comp: "Cell",
				}) ;
			},//end of clickCell
		},//end of methods
				
		components:{
			TinyCell,
		},//end of components
	}
</script>

<style>
	.cell{
		width:76rpx ;
		height:76rpx;
		border: 2rpx solid #808080 ;
	}
	.cellContent{
		line-height: 76rpx;
		text-align: center;
		
		font-size: 56rpx;
		color: #FFFFFF;
	}
	.disable{
		color: #08caff ;
	}
	
	.display{
		display: flex;
		flex-direction: column;
		align-content: center ;
	}
	.tinyCellRow{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
</style>
