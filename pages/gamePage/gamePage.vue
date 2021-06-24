<template>
	<view class="page" :style="{height: offsetHeight}">
		<SudokuComp v-if="prepared" :gameMode="gameMode" :sudokuState="state" @gameOver="handleGameOver">
		</SudokuComp>
		
		<!-- <button @click="handleGameOver">
			click me
		</button> -->
		
		<!-- 添加一个对话框或提示框 -->
		<u-modal v-model="showDialog" :content="content" @confirm="confirm" @cancel="confirm"></u-modal>

	</view>
</template>

<script>
	import {
		mapGetters,
	} from 'vuex';
	import SudokuComp from '../../components/sudokuComp/SudokuComp.vue'
	export default {
		data() {
			return {
				offsetHeight: Number,
				state: [
					[0, 6, 0, 4, 0, 0, 7, 0, 0],
					[9, 5, 7, 0, 0, 1, 0, 0, 0],
					[0, 0, 1, 2, 7, 5, 0, 9, 0],
					[6, 3, 0, 0, 0, 0, 8, 7, 0],
					[7, 0, 0, 8, 0, 0, 9, 0, 1],
					[1, 0, 0, 7, 0, 6, 0, 0, 2],
					[0, 2, 6, 5, 8, 0, 0, 0, 7],
					[8, 0, 0, 0, 2, 4, 0, 5, 6],
					[5, 0, 4, 6, 3, 7, 2, 8, 0],
				], //桩，模拟用，最后要删除
				gameMode: "NORMAL", //桩，模拟用，最后要删除

				difficulty: 1,

				prepared: false, //初始化完成之前，不渲染SudokuComp组件

				showDialog: false, //控制对话框的渲染

				content: "恭喜过关！" //过关
			}
		},

		/**
		 * @description 在这里进行页面的初始化工作
		 */
		beforeMount() {
			console.log("初始化开始") ;
			let that = this ;
			
			wx.getSystemInfo({
				success(res) {
					console.log(res.windowHeight) ;
					that.offsetHeight = res.windowHeight + 'px' ;
				}
			}) ;
			
			
			//1.使用vuex，从store里取出gameMode与difficulty参数。
			// this.gameMode = this.getMode();
			// this.difficulty = this.getdifficulty();
			this.gameMode = this.$store.state.mode ;
			this.difficulty = this.$store.state.difficulty ;
			console.log(this.gameMode) ;
			console.log(this.difficulty) ;
			
			//2.使用wx.request的api进行网络请求向后端请求sudokuState
			let requestData = {mode: this.gameMode} ; 
			if(this.gameMode === "NORMAL")
				requestData.difficulty = this.difficulty ;
 			
			
			
			wx.request({
				url: "https://bad254f1-21d0-47f0-a947-39505455c903.bspapp.com/http/getSudoku",
				data: requestData,
				
				success(res){
					console.log(res.data);
					console.log(that) ;
					that.state = res.data;
					//3.设置prepared字段，进行SudokuComp组件渲染
					that.prepared = true;				
					console.log("初始化结束") ;
				}
			}) ;				
		},

		methods: {

			/**
			 * 处理gameOver事件
			 */
			handleGameOver() {
				//1.显示对话框，提示用户过关成功
				this.showDialog = true;
			},

			confirm() {
				this.showDialog = false;
				wx.navigateTo({
					url: '../index/index',
				})
			}

		},

		// computed: {
		// 	...mapGetters([
		// 		"getMode",
		// 		"getdifficulty"
		// 	]),
		// },

		components: {
			SudokuComp,
		}
	}
</script>

<style>
	.page {
		background-color: #efe9d3;
	}
</style>
