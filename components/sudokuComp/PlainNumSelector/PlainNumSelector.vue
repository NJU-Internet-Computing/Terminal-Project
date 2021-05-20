<template>
	<view>
		<view class="hy-selector">
			
		</view>
	</view>
</template>

<script>
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
				offsetWidth: 125,				
				
				Animation: Object,
				animate: Object,
				
				zeroIndex: 4,
				currentIndex: 0,
				moveRatio: 0.33,
				
				startX: Number,
				distance: Number,				
			}
		},//end of data		
		
		computed: {
			animDest(){
				return -this.offsetWidth * (this.currentIndex-1) ;
			},//end of animDest(currentIndex, offsetWidth)
		},//end of computed
		
		watch: {
			list2BSelect(){
				this.initAnim() ;
			},
			currentItem(){
				this.initAnim() ;
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
	
</style>
