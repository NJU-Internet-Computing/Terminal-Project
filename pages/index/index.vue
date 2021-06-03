<template>
	<view class="main">
	<view class="head">
		<h1 class="title">{{title}}</h1>
	</view>	
	<view class="content">
		<view class="vb1"> 
		<u-button :custom-style="customStyle1" hair-line="false" shape="circle"  ripple="true" ripple-bg-color="#59a1d2" @click="goToStages">
			普通模式
		</u-button>
		</view>
		<view class="vb2">
		<u-button :custom-style="customStyle2" shape="circle" ripple="true" ripple-bg-color="#59a1d2" @click="goToGamePage">
			挑战模式
		</u-button>
		</view>
		
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle1: {
						// 注意驼峰命名，并且值必须用引号包括，因为这是对象
						backgroundColor: '#debeb1',
						color:'#bd8577',
						fontSize:'40rpx',
						height:'100rpx'
					},
					customStyle2: {
							// 注意驼峰命名，并且值必须用引号包括，因为这是对象
							backgroundColor: '#c19a95',
								color:'#7b5f5c',
							fontSize:'40rpx',
							height:'100rpx'
						},
				 title: 'Sudoku'
			}
		},
		methods: {
			goToStages(){
				 wx.navigateTo({
				      url: '../stages/stages',
				    })
			},
			goToGamePage(){
				this.$store.commit('changeMode'),
				 wx.navigateTo({
				      url: '../gamePage/gamePage',
				    })
			},
		}//end of methods
	}
</script>

<style>
	  
	.main{
		background-color:#efe9d3;
		display: flex;
		flex-direction: column;
		justify-content:center;
	} 
	.content{
		margin-top:200rpx;
		max-width: 700rpx;
	}
.vb1{
	width:'100rpx';
	margin-top:50rpx;
	margin-right:140rpx;
	margin-left:170rpx;
	height:'60rpx';
	/* fontSize:'40rpx'; */
}
.vb2{
	width:'100rpx';
	margin-top:100rpx; /* 相对于相邻元素的距离 */
	margin-right:140rpx;
	margin-left:170rpx;
	margin-bottom: 310rpx;
	height:'40rpx';
	fontSize:'20rpx';
	color:'blue';
}
.title{
	font-family:cursive;
	 font-size:55px;
	 color:#bd8577;
	   float:left;
	   -webkit-box-reflect: below 10px 
	   -webkit-linear-gradient(transparent,transparent 50%,rgba(255,255,255,.5));
}
	.head {
		margin-left:120rpx;
		text-align: center;
		  padding: 20px;
		
		margin-top:100rpx;
			}
		
</style>
