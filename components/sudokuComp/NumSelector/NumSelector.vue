<template>
	<view>
		<view>this is NumSelector</view>
		<button @click="clickBtn1">click me</button>		
		<button @click="clickBtn2">click me</button>
		
		<view class="hy-selector">
			<view 
			class="selector"
			@touchstart="touhStart"
			@touchmove="touchMove"
			@touchend="touchEnd">
				<NumSelectorItem v-for="(item, index) in cellNumberToBeSelect" :key="index">
					<template v-slot:item>
						<view >{{item}}</view>
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
				selectorEl: null,
				slideCount: 0,
				offsetWidth: 0,
				swiperStyle: Object,
			}
		},//end of data
		
		computed:{
			...mapGetters(['cellNumberToBeSelect']),
		},//end of computed
		
		
		mounted(){
			this.domOperation() ;
		},//end of mounted()	
		
		methods:{	
			toJSON(){
				return this ;
 			},
			domOperation(){
				// #ifdef MP-WEIXIN
				let query = this.createSelectorQuery() ;			
				// console.log(query.select('.selector')) ;
				let temp = query.select('.selector')
				console.log(temp) ;
				this.selectorEl = temp._component.$vm ;			
				// let slidesEls = this.selectorEl.$children ;	
				// this.slideCount = slidesEls.length ;
				
				console.log(slidesEls.length) ;
				// if(this.slideCount > 3){
					// let cloneFirst = slidesEls[0].cloneNode(true) ;
					// console.log(cloneFirst) ;
					// let cloneFirst = Object.assign({}, slidesEls[0]) ;
					// let cloneLast = slidesEls[this.slideCount-1].cloneNode(true) ;
					// let cloneLast = Object.assign({}, slidesEls[this.slideCount-1]) ;
				// 	swiperEl.insertBefore(cloneLast, slidesEls[0]) ;
				// 	swiperEl.appendChild(cloneFirst) ;
				// 	this.offsetWidth = slidesEls[0].offsetWidth ;
				// 	this.swiperStyle = swiperEl.style ;
				// }
				
				// this.setTransfor(-this.offsetWidth) ;
				// #endif			
			},//end of dowOperation
			
			clickBtn1(){
				this.$store.commit('changeSelectedCell', {row: 0, col: 0}) ;
				console.log(this.cellNumberToBeSelect) ;				
			},
			clickBtn2(){
				this.$store.commit('changeSelectedCell', {row: 1, col: 2}) ;
				console.log(this.cellNumberToBeSelect) ;	
			}
		},//end of methods
		
		components:{			
			NumSelectorItem,
			// console.log(this.$store.state.sudokuComp.sudokuState) ;		
		},//end of components
		
		watch:{
			cellNumberToBeSelect(newVal, oldVal){
				console.log("newVal: " + newVal) ;
				this.domOperation() ;
			}
		}
	}
</script>

<style>
	.hy-selector{
		overflow: hidden;
		position: relative ;
		width: 640rpx;
		height: 80rpx ;
		line-height: 80rpx;
		margin: 0 auto ;
	}
	.selector{	
		display: flex;
		flex-direction: row;
		justify-content: space-around ; 
		justify-items: center ;
		
		font-size: 60rpx;
		text-align: center; 
		
		/* color: #000000; */
		background-color: red;
	}
	
	.NumSelectorItem{
		color: #FFFFFF;
		/* width: 200rpx ; */
	}
</style>
