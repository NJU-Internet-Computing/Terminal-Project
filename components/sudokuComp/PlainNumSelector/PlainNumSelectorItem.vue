<template>
	<view 
		class="PlainNumSelectorItem" 
		:class='{"disable": disableFlag}'
		@click="clickItem"
	>
		{{val}}
	</view>
</template>

<script>
	export default{	
		props: {
			val: Number,
			disableFlag: Boolean,
		},//end of props		
		
		data(){
			return {				
			}
		},//end of data
		
		computed: {
		},//end of computed
		
		watch: {
		},//end of watch
		
		beforeMounted(){
			
		},//end of beforeMounted
		
		mounted(){
		},//end of mounted()	
		
		methods:{			
			clickItem(){
				if(!this.disableFlag)	this.$emit('click') ;
			}
		},//end of methods		
		
		components:{			
		},//end of components
	}
</script>

<style lang="scss">
	.PlainNumSelectorItem{
		font-size: 80rpx;
		font-weight: 700;
		color: #405878;
		// color: $uni-color-error;
		width: 80rpx ;
	}
	.disable{
		color: #A088A0 ;
		opacity: .3;
	}
</style>
