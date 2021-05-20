<template>
	<view>
	<view id="Board" class="Board">
		
		<view v-for="(row, rowIndex) in squares" :key="rowIndex" class="squareRow">
			<Square v-for="(col, colIndex) in row" :key="colIndex"
				:squareRow="rowIndex" :squareCol="colIndex">					
			</Square>
		</view>
		
		<!-- <u-grid	v-for="(row, rowIndex) in squares" 
			:key="rowIndex"  
			:col="3"
		>
			<view v-for="(col, colIndex) in row" 
				:key="col"
				:animation="animate[col]"
			>
				<u-grid-item	bg-color="#AAAAAA" @click.prevent>			
					<Square :squareRow="rowIndex" :squareCol="colIndex">
						<template slot="square">
							<view>
							</view>
						</template>
					</Square>
				</u-grid-item>
			</view>
			
		</u-grid> -->
		</view>
		<!-- <u-button @click="click($event, 1)">clickme</u-button> -->
	</view>
</template>

<script>
	import Square from '../Square/Square.vue'
	export default{	
		data(){
			return {
				dest: 0,
				Animation: Object, 
				// animate: Array,
				animate: [],
				squares:[[0, 1, 2],[3, 4, 5],[6, 7, 8]],
 			}
		},//end of data
		
		computed:{
		},//end of computed
		
		beforeMount() {
			this.Animation = wx.createAnimation({
				duration: 10,
				timingFunction: 'ease',				
			}) ;		
			this.Animation.step() ;
			
			for(let i = 0; i < 9; i++){
				this.Animation.step() ;
				let temp = Object.assign({}, this.Animation.export()) ;
				this.animate.push(temp) ;
			}
			// this.animate = this.Animation.export() ;
		},//end of beforeMount
		
		mounted(){			
		},//end of mounted()
		
		methods:{	
			getKey(row, col){
				return row*3+col ;
			},
			setTransform(dest, i){
				this.Animation.translateX(dest).step() ;
				this.animate[i] = this.Animation.export() ;
				// this.animate = this.Animation.export() ;
			},//end of setTransform(dest)
		},//end of methods				
		
		components:{
			Square,
		},//end of components
	}
</script>

<style>
	/* @import url("../../../static/components/SudokuComp/Board/background-image.png"); */
	.Board{
		margin: 0 auto ;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-evenly ;
		width: 708rpx;
		height: 708rpx;
		background-image: url("https://software-engineering-and-computing2-picturebed.oss-cn-shanghai.aliyuncs.com/%E8%AE%A1%E7%BD%91%E9%A1%B9%E7%9B%AE/sudokuComp/u%3D2271332169%2C204668968%26fm%3D15%26fmt%3Dauto%26gp%3D0.png");
	}
	
	.squareRow{
		display: flex;
		flex-direction: row;
	}
</style>
