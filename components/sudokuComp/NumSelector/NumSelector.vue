<template>
	<view>
		<view>this is NumSelector</view>
		<button @click="clickBtn()">click me</button>
	</view>
	
</template>

<script>
	export default{	
		data(){
			return {				
			}
		},//end of data
		
		
		methods:{			
			clickBtn(){
				console.log(this.$store.sudokuState.sudokuComp)
			}
		},//end of methods
		
		mounted(){			
		},//end of mounted()		
		
		components:{
			
		},//end of components
	}
</script>

<style>
	
</style>
