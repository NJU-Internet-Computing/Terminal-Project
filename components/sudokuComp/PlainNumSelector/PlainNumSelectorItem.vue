<template>
	<view>
		
	</view>
</template>

<script>
	export default{	
		props: {
			propName: {
				type: Number,
				default: 
			},
		},//end of props		
		
		data(){
			return {				
			}
		},//end of data
		
		computed: {
			name() {
				return this.data 
			}
		},//end of computed
		
		watch: {
			data(newValue, oldValue) {
				
			},//end of data
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
