<template>
	<view>
	<!-- 	<view>this is NumSelector</view>
		<button @click="clickBtn1">click me</button>		
		<button @click="clickBtn2">click me</button>
		<button @click="trigAnimation">trig animation</button> -->
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
		data(){
			return {
				slideCount: 0,
				offsetWidth: 0,
				swiperStyle: Object,
				offset2BSelect: Array, 
				Animation: Object,
				animate: Object,
				currentIndex: 0,
				moveRatio: 0.25,
				startX: Number,
				distance: Number,
				zeroIndex: Number,
			}
		},//end of data
		
		computed:{
			...mapGetters(['cellNumberToBeSelect']),
		},//end of computed
		
		
		beforeMount(){
			// this.offset2BSelect = this.cellNumberToBeSelect ;
			this.setOffset2BSelect(this.cellNumberToBeSelect) ;
			// this.domOperation() ;
			
			this.Animation = wx.createAnimation({
				duration: 10,
				timingFunction: 'ease',				
			}) ;			
			
			this.currentIndex = this.zeroIndex ;
			this.setTransform(-(this.currentIndex-1) * this.offsetWidth) ;
		},//end of beforemounted()	
		
		methods:{			
			touchStart(e){
				this.startX = e.touches[0].pageX ;
				// console.log(e.touches[0].pageX) ;
			},//end of touchStart
			
			touchMove(e){
				let currentX = e.touches[0].pageX ;
				this.distance = currentX - this.startX ;
				// console.log(this.distance) ;
				// if(Math.abs(this.distance) < this.offsetWidth) return ;
				let currentPosition = -(this.currentIndex-1) * this.offsetWidth ;
				let dest = currentPosition + this.distance ;
				// console.log(dest) ;
				this.setTransform(dest) ;
			},//end of touchMove
			
			touchEnd(e){
				let dis = Math.abs(this.distance) ;
				
				if(dis === 0) return ;
				if(dis > this.offsetWidth * this.moveRatio){
					if(this.distance > 0) this.currentIndex-- ;
					if(this.distance > this.offsetWidth * 1.75) this.currentIndex-- ;
					if(this.distance < 0) this.currentIndex++ ;
					if(this.distance < -this.offsetWidth * 1.75) this.currentIndex++ ;
				}
				console.log("distance: " + this.distance + "   this.offsetWidth: " + this.offsetWidth) ;
				console.log(this.currentIndex) ;
				console.log(this.slideCount) ;
				this.setTransform(-(this.currentIndex-1) * this.offsetWidth) ;
				this.checkPosition() ;
			},//end of touchEnd
			
			checkPosition(){				
				if(this.currentIndex >= this.slideCount+this.zeroIndex){
					this.currentIndex = this.zeroIndex ;
				}else if(this.currentIndex < this.zeroIndex){
					this.currentIndex = this.slideCount + this.zeroIndex-1 ;
				}
				console.log(this.currentIndex) ;
				this.setTransform(-(this.currentIndex-1) * this.offsetWidth) ;
			},//end of checkPosition
			
			setOffset2BSelect(newVal){			
				
				this.offset2BSelect = [] ;
				for(var i = 0; i < newVal.length; i++){
					if(newVal[i] === 0) this.offset2BSelect.push("空") ;
					else this.offset2BSelect.push(newVal[i].toString()) ;
				}				
				console.log(this.offset2BSelect) ;
				
				this.slideCount = this.offset2BSelect.length ;
				if(this.slideCount === 3){
					
				}
				if(this.slideCount > 3){
					let cloneFirst = this.offset2BSelect[0] ;
					let cloneSecond = this.offset2BSelect[1] ;
					let cloneThird = this.offset2BSelect[2] ;
					let cloneFour = this.offset2BSelect[3] ;
					let cloneLast  = this.offset2BSelect[this.slideCount-1] ;					
					let cloneLastS = this.offset2BSelect[this.slideCount-2] ;
					let cloneLastT = this.offset2BSelect[this.slideCount-3] ;
					let cloneLastF = this.offset2BSelect[this.slideCount-4] ;
					
					this.offset2BSelect.push(cloneFirst) ;
					this.offset2BSelect.push(cloneSecond) ;
					this.offset2BSelect.push(cloneThird) ;
					this.offset2BSelect.push(cloneFour) ;
					this.offset2BSelect.unshift(cloneLast) ;							
					this.offset2BSelect.unshift(cloneLastS) ;					
					this.offset2BSelect.unshift(cloneLastT) ;
					this.offset2BSelect.unshift(cloneLastF) ;
					this.offsetWidth = 100 ;
				}
				this.zeroIndex = 4;
			}, // end of setOffset2BSelect(newVal)
			
			setTransform(dest){
				// this.animate('#selector', [
				//       {translateX: dest },
				//     ], 50) ;
				this.Animation.translateX(dest).step() ;
				this.animate = this.Animation.export() ;
			},//end of setTransform(dest)
			
						
			domOperation(){
				
			},//end of dowOperation
			
			clickBtn1(){
				this.$store.commit('changeSelectedCell', {row: 0, col: 0}) ;
				console.log(this.cellNumberToBeSelect) ;				
			},
			clickBtn2(){
				this.$store.commit('changeSelectedCell', {row: 1, col: 2}) ;
				console.log(this.cellNumberToBeSelect) ;	
			},
			
				trigAnimation(){
					// console.log('enter') ;
					this.currentIndex++ ;
					this.setTransform(-this.currentIndex * this.offsetWidth) ;
					// this.Animation.translateX(-this.currentIndex * this.offsetWidth).step() ;
					// this.animate = this.Animation.export() ;
					// console.log(this.animate) ;
				},// end of trigAnimation
		},//end of methods
		
		components:{			
			NumSelectorItem,
			// console.log(this.$store.state.sudokuComp.sudokuState) ;		
		},//end of components
		
		watch:{
			cellNumberToBeSelect(newVal, oldVal){
				console.log("newVal: " + newVal) ;
				// this.setOffset2BSelect = newVal ;				
				this.setOffset2BSelect(newVal) ;
				this.slideCount = newVal.length ;
				// this.domOperation() ;
			}
		}
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
