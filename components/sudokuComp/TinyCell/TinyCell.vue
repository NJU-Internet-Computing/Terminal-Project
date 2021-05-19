<template>
	<view class="tinyCell">
		{{offsetDisplay}}
	</view>
</template>

<script>
	export default{	
		props: {
			display: ""
		},//end of props		
		
		data(){
			return {
				offsetDisplay: ""
			}
		},//end of data
		
		computed: {
		},//end of computed
		
		watch: {
			display:{
				handler(newVal, oldVal){
					this.offsetDisplay = newVal ;
				}	,
				immediate: true,
			}
		},//end of watch
		
		beforeMounted(){
			
		},//end of beforeMounted
		
		mounted(){
			// console.log(this.offsetDisplay) ;
		},//end of mounted()	
		
		methods:{			
		},//end of methods		
		
		components:{			
		},//end of components
	}
</script>

<style>
	.tinyCell{
		height:24rpx;
		width:24rpx;
		line-height: 22rpx;
		text-align: center;
		font-size: 22rpx;
		color: #aaaaaa;
	}
</style>
