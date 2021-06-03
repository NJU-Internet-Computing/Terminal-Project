<template>
	<view>
	<view id="Board" class="Board">
		
		<view v-for="(row, rowIndex) in squares" :key="rowIndex" class="squareRow">
			<Square v-for="(info, colIndex) in row" 
				:key="info.squareNo"
				:squareRow="info.squareRow" :squareCol="info.squareCol"
				:animation="animate[info.squareNo]">					
			</Square>
		</view>
	
		</view>
	</view>
</template>

<script>
	import Square from '../Square/Square.vue'
	export default{	
		props:{			
			squares:{
				type:Array,
				default:[[
						{squareNo:0, squareRow:0, squareCol:0},
						{squareNo:1, squareRow:0, squareCol:1},
						{squareNo:2, squareRow:0, squareCol:2},
					],[
						{squareNo:3, squareRow:1, squareCol:0},
						{squareNo:4, squareRow:1, squareCol:1},
						{squareNo:5, squareRow:1, squareCol:2},
					],[
						{squareNo:6, squareRow:2, squareCol:0},
						{squareNo:7, squareRow:2, squareCol:1},
						{squareNo:8, squareRow:2, squareCol:2},
					],
				],
			},//end of squares
		},//end of props
		
		computed:{
		},//end of computed
		
		watch:{
			squares:{
				handler(newVal, oldVal){				
					this.slideSquare() ;					
				},
				deep: true,
			}
		},//end of watch
		
		data(){
			return {
				
				dest: 0,
				Animation: Object, 
				// animate: Array,
				animate: [],
				
				offsetUnit: Number,
				origSquares: [],
				
				
				
 			}
		},//end of data
		
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
						
			
			let width = 0 ;
			wx.getSystemInfo({
				success(res) {
					width = res.windowWidth ;
				}
			})
			this.offsetUnit = Math.floor(236 * width / 750) ;
			
			this.origSquares = this.squares ;
			
			// this.animate = this.Animation.export() ;
		},//end of beforeMount
		
		mounted(){			
		},//end of mounted()
		
		methods:{	
			getKey(row, col){
				return row*3+col ;
			},
			slideSquare(){				
				this.animate = []
				for(let i = 0; i < 3; i++){
					for(let j = 0;j < 3; j++){
						let dx = this.squares[i][j].squareCol - this.origSquares[i][j].squareCol ;
						let dy = this.squares[i][j].squareRow - this.origSquares[i][j].squareRow ;
						
						let destX = dx * this.offsetUnit ;
						let destY = dy * this.offsetUnit ;
						let coor = i*3+j ;
						this.animate.push(this.setTransform(destX, destY, coor)) ;
					}				
				}
				
			},//end of slideSquare
			setTransform(destX, destY, i){				
				this.Animation.translate(destX, destY).step() ;
				return this.Animation.export() ;
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
		/* background-image: url("https://software-engineering-and-computing2-picturebed.oss-cn-shanghai.aliyuncs.com/%E8%AE%A1%E7%BD%91%E9%A1%B9%E7%9B%AE/sudokuComp/u%3D2271332169%2C204668968%26fm%3D15%26fmt%3Dauto%26gp%3D0.png"); */
	}
	
	.squareRow{
		display: flex;
		flex-direction: row;
	}
</style>
