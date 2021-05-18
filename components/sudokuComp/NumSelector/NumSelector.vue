<template>
	<view>
		<view class="hy-selector">
			<view
			class="selector"
			id="selector"
			@touchstart="touchStart"
			@touchmove="touchMove"
			@touchend="touchEnd" 
			:animation="animate"
			>			
				<NumSelectorItem v-for="(item, index) in offset2BSelect" :key="index">
					<template v-slot:item>
						<view>{{item}}</view>
						<!-- <view>{{item}}</view> -->
					</template>
				</NumSelectorItem>				
			</view>
			<!-- end of selector -->
			
			</view>
	</view>	
</template>

<script>
	import {mapGetters} from 'vuex' ;
	import NumSelectorItem from './NumSelectorItem/NumSelectorItem.vue' ;
	export default{
		props:{
			list2BSelect:{
				type: Array,
				required: true
			},
			currentItem:{
				type: [Number, String],				
			},
		},//end of props
		
		data(){
			return {
				offset2BSelect: Array,
				slideCount: 0,
				offsetWidth: 100,				
				
				Animation: Object,
				animate: Object,
				
				zeroIndex: 4,
				currentIndex: 0,
				moveRatio: 0.33,
				
				startX: Number,
				distance: Number,				
			}
		},//end of data		
		
		beforeMount(){
			this.Animation = wx.createAnimation({
				duration: 10,
				timingFunction: 'ease',				
			}) ;				
			this.initAnim() ;			
		},//end of beforemounted()	
		
		beforeUpdate(){
		},//end of beforeUpdate()
		
		computed:{			
			animDest(){
				return -this.offsetWidth * (this.currentIndex-1) ;
			},//end of animDest(currentIndex, offsetWidth)
		},//end of computed
		
		watch:{
			list2BSelect(){
				this.initAnim() ;
			},
		},//end of watch		
		
		methods:{				
			
			initAnim(){
				let baseIndex = 0 ;
				for(let i = 0; i < this.list2BSelect.length; i++, baseIndex++){
					if(this.list2BSelect[i] === this.currentItem) break ;
				}		
				this.currentIndex = this.zeroIndex + baseIndex ;
				this.slideCount = this.list2BSelect.length ;
				
				this.setOffset2BSelect(this.list2BSelect) ;
				this.setTransform(this.animDest);
			},//end of initAnim()
			
			setTransform(dest){
				this.Animation.translateX(dest).step() ;
				this.animate = this.Animation.export() ;
			},//end of setTransform(dest)		
			
			touchStart(e){
				this.startX = e.touches[0].pageX ;
			},//end of touchStart
			
			touchMove(e){
				let currentX = e.touches[0].pageX ;
				this.distance = currentX - this.startX ;
				let dest = this.animDest + this.distance ;
				this.setTransform(dest) ;
			},//end of touchMove
			
			touchEnd(e){
				let dis = Math.abs(this.distance) ;
				if(dis === 0) return ;
				
				let deltaDis = Math.floor(dis / this.offsetWidth) ;
				let remain = dis % this.offsetWidth ;
				
				if(remain >= (1-this.moveRatio) * this.offsetWidth){
					deltaDis ++ ;
				}
				if(this.distance > 0) this.currentIndex -= deltaDis ;
				if(this.distance < 0) this.currentIndex += deltaDis ;				
				
				
				// if(dis === 0) return ;
				// if(dis > this.offsetWidth * this.moveRatio){
				// 	if(this.distance > 0) this.currentIndex-- ;
				// 	if(this.distance > this.offsetWidth * 1.75) this.currentIndex-- ;
				// 	if(this.distance < 0) this.currentIndex++ ;
				// 	if(this.distance < -this.offsetWidth * 1.75) this.currentIndex++ ;
				// }
				this.setTransform(this.animDest) ;
				this.checkPosition() ;
			},//end of touchEnd
			
			checkPosition(){				
				if(this.currentIndex >= this.slideCount+this.zeroIndex){
					let temp = this.currentIndex - this.slideCount - this.zeroIndex ;
					this.currentIndex = this.zeroIndex + temp ;
				}else if(this.currentIndex <= this.zeroIndex - 1){
					let temp = this.currentIndex - (this.zeroIndex-1) ;
					this.currentIndex = this.slideCount + this.zeroIndex-1 + temp;
				}
				this.setTransform(this.animDest) ;
			},//end of checkPosition
			
			setOffset2BSelect(newVal){
				this.offset2BSelect = newVal.slice(0) ;
				let len = newVal.length ;
				
				if(len < 3) {
					alert("list2BSelect should have more than 2 element") ;
					console.log("list2BSelect should have more than 2 element")
					return ;
				}
				if(len === 3){
					let array = newVal.slice(0) ;
					let cloneFirst = newVal[0] ;
					let cloneLast = newVal[len-1] ;
					
					this.offset2BSelect.push(...array) ;
					this.offset2BSelect.unshift(...array) ;
					
					this.offset2BSelect.push(cloneFirst) ;
					this.offset2BSelect.unshift(cloneLast) ;					
				}else{
					let cloneFirst4 = newVal.slice(0, 4) ;
					let cloneLast4 = newVal.slice(len-4) ;
					
					this.offset2BSelect.push(...cloneFirst4) ;
					this.offset2BSelect.unshift(...cloneLast4) ;
				}
			}, // end of setOffset2BSelect(newVal)					
			
		},//end of methods
		
		components:{			
			NumSelectorItem,	
		},//end of components		
		
	}
</script>

<style>
	.hy-selector{
		overflow: hidden;
		position: relative ;
		width: 600rpx;
		height: 80rpx ;
		line-height: 80rpx;
		margin: 0 auto ;		
		background-color: red;
	}
	.selector{	
		display: flex;
		flex-direction: row;
		/* justify-content: space-around ; */
		justify-items:baseline ; 
		
		font-size: 60rpx;
		text-align: center; 
		
		/* color: #000000; */
		/* color: #FFFFFF; */
	}
	

</style>
