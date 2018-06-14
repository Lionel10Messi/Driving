import * as types from './types'
import * as state from './state'
let store = require('../store');
import Vue from 'vue'

const mutations = {
    //页面监听
    [types.PAGES]: (state, playload) => {
        state.lastPage = playload.lastPage
        state.currentPage = playload.currentPage
    },
}

export default {
    mutations
}