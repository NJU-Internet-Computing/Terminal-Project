<template>
	<view class="page">
		<SudokuComp 
			:gameMode="gameMode"
			:sudokuState="state"
			@gameOver="handleGameOver"
		>			
		</SudokuComp>
	</view>
</template>

<script>
	import SudokuComp from '../../components/sudokuComp/SudokuComp.vue'
	export default {
		data() {
			return {
				state : [
					[0, 6, 0, 4, 0, 0, 7, 0, 0],
					[9, 5, 7, 0, 0, 1, 0, 0, 0],
					[0, 0, 1, 2, 7, 5, 0, 9, 0],
					[6, 3, 0, 0, 0, 0, 8, 7, 0],
					[7, 0, 0, 8, 0, 0, 9, 0, 1],
					[1, 0, 0, 7, 0, 6, 0, 0, 2],
					[0, 2, 6, 5, 8, 0, 0, 0, 7],
					[8, 0, 0, 0, 2, 4, 0, 5, 6],
					[5, 0, 4, 6, 3, 7, 2, 8, 0],
				],
				gameMode: "NORMAL",
			}
		},
		methods: {
			handleGameOver(){
				
			},
		},
		components:{
			SudokuComp,
		}
	}
</script>

<style>
.page{
	background-color: #efe9d3;
}
</style>
