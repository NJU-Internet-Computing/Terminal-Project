<template>
	<view class="hy-selector">
		
		<view class="selector" v-show="!disableFlag">
			<PlainNumSelectorItem v-for="(item, index) in offset2BSelect" 
				:key="index"
				:val="item.val"
				:disableFlag="item.disableFlag"
				@click="clickItem($event, item.val)">				
			</PlainNumSelectorItem>			
		</view>
		<!-- end of view.selector -->
		
		<!-- <PlainNumSelectorIndiFrame 	
			id="indicator"
			class="indicator"
			:animation="animate"
			v-show="(offsetCurrentItem !== 0)"
			ref="indiFrame"
		></PlainNumSelectorIndiFrame> -->
		
		<view
			id="indicator"
			class="indicator"
			:animation="animate"
			v-show="(offsetCurrentItem !== 0)"
			ref="indiFrame"
		></view>
		
	</view>
</template>

<script>
	import PlainNumSelectorIndiFrame from './PlainNumSelectorIndiFrame.vue'
	import PlainNumSelectorItem from './PlainNumSelectorItem.vue'
	export default{	
		props:{
			list2BSelect:{
				type: Array,
				required: true
			},
			currentItem:{
				type: [Number, String],				
			},
			disableFlag:{
				type:Boolean,
			}
		},//end of props
		
		data(){
			return {
				offset2BSelect: Array,
				slideCount: 0,
				offsetWidth: 0,				
				offsetHeight: 0,
								
				Animation: Object,
				animate: Object,
				
				offsetCurrentItem: 0,
				
				zeroIndex: 4,
				moveRatio: 0.33,
				
				startX: Number,
				distance: Number,				
			}
		},//end of data		
		
		computed: {
		},//end of computed
		
		watch: {
			list2BSelect(newVal, oldVal){
				this.setOffset2BSelect(newVal) ;
				this.offsetCurrentItem = this.currentItem ;
				// this.initAnim() ;
			},
			currentItem(newVal, oldVal){
				console.log("in watch: currentItem")
				console.log("newVal " + newVal) ;
				this.offsetCurrentItem = newVal ;
				this.slideAnim() ;
				// this.setCurrentItem(newVal) ;
				// this.initAnim() ;
			}
		},//end of watch
		
		beforeMount(){
			console.log("in PlainNumSelector hook: beforeMounted")
			// let query = wx.createSelectorQuery() ;
			// let comp = query.select('.indicator').fields({				
			// 	computedStyle: [''],
			// })
			this.setOffset2BSelect(this.list2BSelect) ;
			let w = 0 ;
			let h = 0 ;
			wx.getSystemInfo({
				success(res) {
					w = Math.floor(80 * res.windowWidth / 750 ) ;
					h = Math.floor(104 * res.windowWidth / 750 ) ;
				}
			})
			this.offsetWidth = w ;
			this.offsetHeight = h ;
			console.log(this.offsetWidth) ;
			this.Animation = wx.createAnimation({
				duration: 400,
				timingFunction: 'ease-out',
			})
			this.initAnim() ;
		},//end of beforeMounted
		
		mounted(){
			console.log("in PlainNumSelector hook: mounted")
		},//end of mounted()	
		
		methods:{
			initAnim(){
				this.setTransform(0, -this.offsetHeight) ;
			},//end of initAnim
			
			slideAnim(){
				let destX = this.offsetWidth * (this.offsetCurrentItem - 1);
				let destY = -this.offsetHeight ;
				this.setTransform(destX, destY) ;
			},//end of slideAnim()
			
			setTransform(destX, destY){
				this.Animation.translate(destX, destY).step() ;
				this.animate = this.Animation.export() ;
			},//end of setTransform
			
			clickItem(e, targetVal){
				console.log("click " + targetVal) ;
				this.offsetCurrentItem = targetVal ;
				this.slideAnim() ;
				this.$emit('selected', targetVal) ;
			},//end of clickItem
			
			setCurrentItem(val){
				
			},//end of setCurrentItem
			
			setOffset2BSelect(list){
				this.offset2BSelect = [] ;
				for(let i = 0; i < 10; i++){
					this.offset2BSelect.push({
						val: i,
						disableFlag: true,
					}) ;
				}
				
				list.forEach((num)=>{
					this.offset2BSelect[num].disableFlag = false ;
				}) ;
				this.offset2BSelect.shift() ;// shift obj which have 0 insize
				console.log("func: setOffset2BSelect")
				console.log(this.offset2BSelect) ;
			},//end of setOffset2BSelect()
		},//end of methods		
		
		components:{			
			PlainNumSelectorItem,
			PlainNumSelectorIndiFrame,
		},//end of components
	}
</script>

<style>
	.hy-selector{
		border-top: 4rpx solid #3F536E;
		border-bottom: 4rpx solid #3F536E;
		
		height: 108rpx;
		line-height: 100rpx;
		width: 720rpx;
		text-align: center;
		
		margin: 10rpx 10rpx auto ;		
	}
	.selector{
		display: flex;
		justify-content: center;		
		width: 720rpx;
		/* background-color: #E0E6FE; */
	}
	.indicator{
		width: 80rpx;
		height: 110rpx;
		border: 10rpx solid #B3AED7 ;
	}
	
</style>
