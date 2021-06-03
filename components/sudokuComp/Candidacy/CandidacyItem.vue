<template>
	<view class="CandidacyItem">
			<u-badge :count="info.val" type="info" :offset="[20, 20]"></u-badge>
			<u-switch v-model="offsetAutoFlag" v-bind:id="id" size="30"></u-switch>
			<label v-bind:for="id" @click="switchAuto">自动</label>
			
			<u-radio-group 
				v-model="radioValue" 
				@change="radioGroupChange"
				v-show="!offsetAutoFlag"
			>	<u-line color="red" />
				<u-radio name="cand" :label-disabled="false">候选</u-radio>
				<u-radio name="unCand" :label-disabled="false">非候选</u-radio>
			</u-radio-group>
			
	</view>
</template>

<script>
	export default{	
		props: {
			info: { //format
				val: Number,
				disableFlag: Boolean,
				autoFlag: Boolean,
				candFlag: Boolean,
			},
		},//end of props		
		
		data(){
			return {
				offsetAutoFlag: Boolean,
				selectedFlag: false,
				id: String,
				radioValue: null,
			}
		},//end of data
		
		computed: {
		},//end of computed
		
		watch: {
			offsetAutoFlag(newVal, oldVal){
				
			},//end of 
		},//end of watch
		
		beforeMount(){
			
			this.offsetAutoFlag = this.info.autoFlag ;
			
			if(this.info.val === 1) this.selectedFlag = true ;
			else this.selectedFlag = false ;
			
			
			this.initID() ;
		},//end of beforeMounted
		
		mounted(){
		},//end of mounted()	
		
		methods:{
			initID(){
				this.id = "switch-" + this.info.val
			},//end of initID()
			
			switchAuto(){
				this.offsetAutoFlag = !this.offsetAutoFlag ;
			},//end of switchAuto
			
			emitChangeInfo(){
				
				this.$emit('') ;
			},//end of emitChangeInfo
			
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
			}
			
		},//end of methods		
		
		components:{			
		},//end of components
	}
</script>

<style>
	.CandidacyItem{
		font-size: 30rpx;
	}
</style>
