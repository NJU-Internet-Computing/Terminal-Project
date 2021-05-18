
import Vue from 'vue'
import Vuex from 'vuex'
import moduleSudokuComp from './sudokuComp/sudokuComp.js'
Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{
		msg: "hello world",
	},
	modules:{
		sudokuComp: moduleSudokuComp,
	}
})
export default store