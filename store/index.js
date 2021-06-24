import Vue from 'vue'
import Vuex from 'vuex'
import moduleSudokuComp from './sudokuComp/sudokuComp.js'
Vue.use(Vuex); //vue的插件机制


const getters = { //实时监听state值的变化(最新状态)
	getMode: state => () => { //承载变化的mode的值
		return state.mode
	},
	getdifficulty: state => () => { //承载变化的难度的值
		return state.difficulty
	}
};
const mutations = {
	chooseNormalMode(state){
		state.mode = "NORMAL";
	},
	choosePuzzleMode(state) { //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
		state.mode = "PUZZLE";
	},
	chooseEasy(state) { //选择初等难度
		state.difficulty = 1;
	},
	chooseMiddle(state) { //选择中等难度
		state.difficulty = 2;
	},
	chooseHard(state) { //选择困难难度
		state.difficulty = 3;
	}
};
const actions = {
	changeMode(context) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
		context.commit('chooseMode');
	},
	changeMiddle(context) { //同上注释
		context.commit('chooseMiddle');
	},
	changeHard(context) { //同上注释
		context.commit('chooseHard')
	}
};

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		mode: "NORMAL",
		difficulty: 1
	},
	modules: {
		sudokuComp: moduleSudokuComp,
	},
	mutations,
	actions
})
export default store
