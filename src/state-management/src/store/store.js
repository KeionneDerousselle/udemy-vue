import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => `${state.counter} clicks!`
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => state.counter--
  },
  actions: {
    increment: (context, payload ) => context.commit('increment', payload),
    decrement: ({ commit }) => commit('decrement'),
    asyncIncrement: ({ commit }) => setTimeout(() => {
      commit('increment');
    }, 2000),
    asyncDecrement: ({ commit }) => setTimeout(() => {
      commit('decrement');
    }, 2000)
  }
});
