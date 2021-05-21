<template>
	<view class="square">
		<!-- <slot name="square"></slot> -->
		<view v-for="(row, rowIndex) in cells" :key="rowIndex" class="cellRow">				
			<Cell v-for="(col, colIndex) in row" :key="colIndex"
				:cellRow="(3*squareRow+rowIndex)" 
				:cellCol="(3*squareCol+colIndex)">				
			</Cell>			
		</view>
		<!-- <view>this is a square {{squareRow}} + {{squareCol}}</view> -->
		
<!-- 		<u-grid	v-for="(row, rowIndex) in squares"
			:key="rowIndex"  
			:col="3"
		>
			<view v-for="(col, colIndex) in row" 
				:key="col"
			>
				<u-grid-item	bg-color="#00aaff">			
					<Cell :cellRow="rowIndex" :cellCol="colIndex">
						<template slot="cell">
							<view>
							</view>
						</template>
					</Cell>
				</u-grid-item>
			</view>
			
		</u-grid> -->
		
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
			}
		
		},//end of props
		
		data(){
			return {			
				cells:[[0, 1, 2],[3, 4, 5],[6, 7, 8]],
			}
		},//end of data
		
		methods:{			
		},//end of methods
		
		mounted(){			
		},//end of mounted()		
		
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
