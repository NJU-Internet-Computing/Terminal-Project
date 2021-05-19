<template>
		<view class="NumSelectorItem">
			<slot name="item"></slot>
		</view>
</template>

<script>
	export default{	
		data(){
			return {				
			}
		},//end of data
		
		methods:{			
		},//end of methods
		
		mounted(){			
		},//end of mounted()		
		
		components:{},//end of components
	}
</script>

<style lang="scss">
	/* @import url("../../../../uni.scss") ; */
	.NumSelectorItem{
		color: #101010;
		// color: $uni-color-error;
		width: 250rpx ;
	}
	
</style>
