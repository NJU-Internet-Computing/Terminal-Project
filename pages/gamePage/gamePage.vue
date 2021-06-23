<template>
	<view class="page">
		<SudokuComp v-if="prepared"		
			:gameMode="gameMode"
			:sudokuState="state"
			@gameOver="handleGameOver"
		>
		</SudokuComp>
		
		<!-- 添加一个对话框或提示框 -->
		
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
				],	//桩，模拟用，最后要删除
				gameMode: "NORMAL",//桩，模拟用，最后要删除
				
				prepared: false,	//初始化完成之前，不渲染SudokuComp组件
				
				showDialog: false,	//控制对话框的渲染
			}
		},
		
		/**
		 * @description 在这里进行页面的初始化工作
		 */
		beforeMount() {
			//1.使用vuex，从store里取出gameMode与difficulty参数。
			
			//2.使用wx.request的api进行网络请求向后端请求sudokuState
			
			//3.设置prepared字段，进行SudokuComp组件渲染
			prepared = true ;				
		},
		
		methods: {
			
			/**
			 * 处理gameOver事件
			 */
			handleGameOver(){
				//1.显示对话框，提示用户过关成功
				
				//2.固定时间后，关闭对话框
				
				//3.返回游戏主页
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
