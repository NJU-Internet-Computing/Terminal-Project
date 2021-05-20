<template>
	<view class="content">
		<view>
			hello terminal project
		</view>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	
		<u-button open-type="default"  ripple  ripple-bg-color="#9eeaf9" @click="navigate2">
			调试用
			
		</u-button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			navigate2(){
				setTimeout(()=>{
					uni.navigateTo({
						url: "../../components/sudokuComp/SudokuComp",
					}) ;
				}, 250) ;
				
			},//end of naviagate2
		},//end of methods
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
