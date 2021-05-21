<template>
	<view class="tinyCell" :class="{'selectedFlag': selectedFlag}">
		{{offsetDisplay}}
	</view>
</template>

<script>
	export default{	
		props: {
			display: "",
			selectedFlag: Boolean,
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
		/* font-weight: 700; */
		color: #405878;
	}
	.selectedFlag{
		color: #FFFFFF;
		font-weight: bold;
	}
</style>
