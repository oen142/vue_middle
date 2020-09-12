import Vue from 'vue'
import Vuex from 'vuex'
/*import * as getters from './getters.js'
import * as mutations from './mutations.js'*/
import todoApp from './modules/todoApp.js'


Vue.use(Vuex);

/*
* use 사용하는 이유
* 뷰를 사용하는 곳에서 글로벌 하게 사용하기 위해서
*
*
* */

export const store = new Vuex.Store({
    modules :{
        todoApp
    }
});