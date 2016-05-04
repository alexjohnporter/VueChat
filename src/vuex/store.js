import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

const state = {
    baseUrl: 'https://popping-torch-3416.firebaseio.com/',
    user: null
};

const mutations = {
    SET_USER(state, user){
        let newUser = new Firebase(state.baseUrl + '/user').push(user);
        user['id'] = newUser.key();
        state.user = user;
    }
};
export default new Vuex.Store({
    state,
    mutations
});