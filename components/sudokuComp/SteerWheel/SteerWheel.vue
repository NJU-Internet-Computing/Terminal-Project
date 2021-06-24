<template>
	<view class="SteerWheel">
		<u-grid  :col="3" v-for="(row, rowIndex) in icons" :key="rowIndex" class="u-grid-row" @click="clickItem">
			<u-grid-item v-for="(icon, colIndex) in row" :index="icon" :key="colIndex"
				bg-color="#efe9d3"
			>
				<u-icon :name="icon" size="100"></u-icon>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default{	
		props: {
		},//end of props		
		
		data(){
			return {
				icons:[
					['','arrow-up',''],
					['arrow-left','','arrow-right'],
					['','arrow-down',''],
				],
				gridItemStyle: {
					"background-color": '#efe9d3',
				},
			}
		},//end of data
		
		computed: {
		},//end of computed
		
		watch: {
		},//end of watch
		
		beforeMount(){			
		},//end of beforeMounted
		
		mounted(){
		},//end of mounted()	
		
		methods:{			
			clickItem(event){
				if(event < "arraw-") return ;
				this.$emit('tapSteerWheel', event) ;
			},//end of clickItem(event)
		},//end of methods		
		
		components:{			
		},//end of components
	}
</script>

<style>
	.SteerWheel{
		width: 600rpx;
		margin: 10rpx auto ;
		background-color: #efe9d3;
	}
	.u-grid-row{
		width: 100%;
	}
</style>
