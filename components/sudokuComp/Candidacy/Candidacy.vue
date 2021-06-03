<template>
	<view class="Candidacy">
		<view>this is Candidacy</view>
		<u-card>
			<template slot="body">
				<u-grid v-for="(row, rowIndex) in offsetDisplayInfo"
					:key="rowIndex"
				>
					<u-grid-item v-for="(info, colIndex) in row"
						:key="(3*rowIndex+colIndex)"
					>
						<CandidacyItem :info="info" @click.prevent></CandidacyItem>
					</u-grid-item>
				</u-grid>
			</template>			
		</u-card>
	</view>
</template>

<script>
	import CandidacyItem from './CandidacyItem.vue'
	export default{	
		props: {
			displayInfo: null,
		},//end of props		
		
		data(){
			return {
				offsetDisplayInfo: null,
			}
		},//end of data
		
		computed: {
		},//end of computed
		
		watch: {
			displayInfo(newVal, oldVal){
				this.setOffsetDisplayInfo(newVal) ;
			}//end of displayInfo
		},//end of watch
		
		beforeMount(){
			this.setOffsetDisplayInfo(this.displayInfo) ;
			
		},//end of beforeMounted
		
		mounted(){
			
		},//end of mounted()	
		
		methods:{			
			
			setOffsetDisplayInfo(list){
				this.offsetDisplayInfo = [] ;
				for(let i = 0; i < 3; i++){
					let child = [] ;
					for(let j = 0; j < 3; j++){
						let coor = i*3+j ;		
						child.push(list[coor]) ;
					}
					this.offsetDisplayInfo.push(JSON.parse(JSON.stringify(child))) ;
				}
			},//end of setOffsetDisplayInfo(list)
			
		},//end of methods		
		
		components:{	
			CandidacyItem,
		},//end of components
	}
</script>

<style>
	
</style>
