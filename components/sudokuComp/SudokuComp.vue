<template>
	<view>
		<Board></Board>
		<NumSelector></NumSelector>
	</view>
</template>

<script>
	import Board from './Board/Board.vue' ;
	import NumSelector from './NumSelector/NumSelector.vue' ;
	
	export default{	
		data(){
			return {				
			}
		},//end of data
		
		methods:{			
		},//end of methods
		
		created() {
			console.log(this.$store)
		},
		mounted(){			
		},//end of mounted()		
		
		components:{
			Board, 
			NumSelector,
		},//end of components
	}
</script>

<style>
	
</style>
