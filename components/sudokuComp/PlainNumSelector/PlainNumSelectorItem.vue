<template>
	<view 
		class="PlainNumSelectorItem" 
		:class='{"disable": selectableFlag}'
		@click="clickItem"
	>
		{{val}}
		<u-badge v-show="!hideAllDisplayFlag && candidacyFlag && autoControlFlag" :is-dot="true" size="mini" 
		type="success"
		absolute="true" 
		offset="[50,50]"></u-badge>
		
		<u-badge v-show="!hideAllDisplayFlag && candidacyFlag && !autoControlFlag" :is-dot="true" size="mini"		
		type="warning"
		absolute="true" 
		offset="[50,50]"></u-badge>
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex';
	export default{	
		props: {
			val: Number,
			selectableFlag: Boolean, //selectable
			candidacyFlag: Boolean,	//
			autoControlFlag: Boolean,
		},//end of props		
		
		data(){
			return {			
				clickNum: 0,
			}
		},//end of data
		
		computed: {
			...mapState({
				hideAllDisplayFlag: state=>state.sudokuComp.hideDisplayFlag,
			}),
		},//end of computed
		
		watch: {
		},//end of watch
		
		beforeMount(){
			
		},//end of beforeMounted
		
		methods:{			
			clickItem(){
				if(this.disableFlag) return ;
				this.clickNum++ ;
				console.log(this.clickNum) ;
				setTimeout(()=>{
					if(this.clickNum === 1){
						console.log("单击了")  ;
						this.singleClickHandler() ;
					}else if(this.clickNum === 2){
						console.log("双击了")  ;
						this.doubleClickHandler() ;
					}
					this.clickNum = 0 ;
				}, 250) ;
			},
			singleClickHandler(){
				this.$emit('click') ;
			},
			doubleClickHandler(){
				this.$emit('dbClick') ;
			},
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
		
		position: relative;
		
	}
	.disable{
		color: #A088A0 ;
		opacity: .3;
	}
</style>
