<template>
	<view class="main">
	<view class="head">
		<h1 class="title" font="Century Gothic">{{title}}</h1>
	</view>	
		<view class="content">
			<view class="easy">
			<u-button :custom-style="customStyle1" shape="circle" ripple="true" ripple-bg-color="#59a1d2" @click="goToEasyGame">
				简单
				</u-button>
		</view>
		<view class="middle">
			<u-button :custom-style="customStyle2" shape="circle" ripple="true" ripple-bg-color="#59a1d2" @click="goToMiddleGame">
				中等
			</u-button>
			</view>
			<view class="hard">
			<u-button :custom-style="customStyle3" shape="circle" ripple="true" ripple-bg-color="#59a1d2" @click="goToHardGame">
				困难
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
					backgroundColor: '#debeb1',
					color:'#efe9d3',
						fontSize:'40rpx',
						height:'100rpx'
					},
					customStyle2: {
						fontSize:'40rpx',
						backgroundColor: '#c19a95',
							color:'#efe9d3',
							height:'100rpx'
						},
						customStyle3: {
							backgroundColor: '#bd8577',
								fontSize:'40rpx',
								color:'#efe9d3',
								 // 注意驼峰命名，并且值必须用引号包括，因为这是对象
								// color: '#ae8e89',
								height:'100rpx'
							},
							title: '难度选择'
			}
		},
		methods: {
			goToEasyGame(){
				 wx.navigateTo({
				      url: '../gamePage/gamePage',
				    })
			},
			goToMiddleGame(){
				this.$store.dispatch('changeMiddle'),
				 wx.navigateTo({
				      url: '../gamePage/gamePage',
				    })
			},
			goToHardGame(){
				this.$store.dispatch('changeHard'),
				 wx.navigateTo({
				      url: '../gamePage/gamePage',
				    })
			}
		}
	}
</script>

<style>
	.main{
		background-color:#efe9d3;
		display: flex;
		flex-direction: column;
		justify-content:center;
	} 
.easy{
	margin-top:160rpx;
	margin-right:150rpx;
	margin-left:150rpx;
	
}
.middle{
	margin-top:100rpx; /* 相对于相邻元素的距离 */
	margin-right:150rpx;
	margin-left:150rpx;
}
.hard{
	margin-top:100rpx; /* 相对于相邻元素的距离 */
	margin-right:150rpx;
	margin-left:150rpx;
	margin-bottom: 300rpx;
}
.title{
	font-family:"Times New Roman",Georgia,Serif;
	 font-size:40px;
	 color:#bd8577 ;
	  float:left;
	  font:Century Gothic;
	  /* -webkit-box-reflect: below 10px 
	   -webkit-linear-gradient(transparent,transparent 50%,rgba(255,25 5,255,.5));*/
}
	.head {
		margin-left:140rpx;
		text-align: center;
		  padding: 20px;
		
		margin-top:100rpx;
			}
</style>
