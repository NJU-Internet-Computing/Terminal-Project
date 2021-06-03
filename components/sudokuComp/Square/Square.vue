<template>
	<view class="square">
		<!-- <slot name="square"></slot> -->
		<view v-for="(row, rowIndex) in cells" :key="rowIndex" class="cellRow">				
			<Cell v-for="(info, colIndex) in row" 
			:key="info.cellNO"
				:cellRow="info.cellRow" 
				:cellCol="info.cellCol">
			</Cell>			
		</view>	
	</view>
</template>

<script>
	import Cell from '../Cell/Cell.vue' ;
	export default{
		props:{
			squareRow:{
				type: Number,
				required: true,
			},
			squareCol:{
				type: Number,
				required: true,
			},			
		
		},//end of props
		computed:{
			squareCoor(){
				return {squareRow: this.squareRow, squareCol: this.squareCol} ;
			},
			
			
		},//end of computed
		watch:{
			squareCoor:{
				handler(newVal, oldVal){
					this.offsetSquareRow = newVal.squareRow ;
					this.offsetSquareCol = newVal.squareCol ;
					this.setCells() ;
				},
				immediate: true,
			},//end of 
		},
		
		data(){
			return {			
				cells:[],
				offsetSquareRow: Number,
				offsetSquareCol: Number,
			}
		},//end of data
		
		methods:{			
			setCells(){
				this.cells = [] ;
				for(let i = 3*this.offsetSquareRow; i < 3*(this.offsetSquareRow+1); i++){
					let child = [] ;
					for(let j = 3*this.offsetSquareCol; j < 3*(this.offsetSquareCol+1); j++){
						child.push({cellRow: i, cellCol: j, cellNO: (9*i+j)}) ;
					}
					this.cells.push(JSON.parse(JSON.stringify(child))) ;
				}
			},//end of setCells
		},//end of methods
		
		components:{
			Cell,
		},//end of components
	}
</script>

<style>
	.square{
		width: 236rpx;
		height: 236rpx;
		border: 4rpx solid #405878 ;
		display: flex;
		flex-direction: column;
		
		justify-content: center ;
		/* width: 216rpx ;
		border: 4rpx solid #C8C7CC;
		height: 216rpx ;
		color: #000000;
		line-height: 216rpx;
		text-align: center;
		
		font-size: 32rpx; */
	}
	.cellRow{
		display: flex;
		flex-direction: row;
		justify-content: center ;
		
	}
</style>
