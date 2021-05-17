
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    state:{//存放状态
			sudokuState: [
				[1,2,3,4,5,6,7,8,9],
				[2,3,4,5,6,7,8,9,1],
				[3,4,5,6,7,8,9,1,2],
				[4,5,6,7,8,9,1,2,3],
				[5,6,7,8,9,1,2,3,4],
				[6,7,8,9,1,2,3,4,5],
				[7,8,9,1,2,3,4,5,6],
				[8,9,1,2,3,4,5,6,7],
				[9,1,2,3,4,5,6,7,8]]
			,
    }
})
export default store