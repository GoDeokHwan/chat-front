import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import eventBus from "../event_bus";

import chatWebSocket from './modules/chatWebSocket'

Vue.use(Vuex)

const LOCAL_STORAGE_TOKEN_KEY = 'token'
const IS_AUTHORIZED = 'isAuthorized'

export const store = new Vuex.Store({
    modules: {
        chatWebSocket
    },
    state: {
        isLoggedIn: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    },
    mutations: {
        LOGIN_SUCCESS (state) {
            state.isLoggedIn = true
            localStorage.setItem(IS_AUTHORIZED, 'true')
        }
    },
    actions: {
        login: function ({commit}, loginParam) {
            let loginResponse = {
                isSuccess: false,
                data: {}
            }

            return axios({
                method: 'post',
                url: '/auth/login',
                data: loginParam,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then((res) => {
                try {
                    const  responseData = res.data
                    if (res.status === 200 && responseData.token) {
                        localStorage.setItem("token", responseData.token)
                        loginResponse.data = { token: responseData.token}
                        loginResponse.isSuccess = true
                    }
                    return loginResponse
                } catch (result) {
                    loginResponse.isSuccess = false
                    loginResponse.data = {code: 401}
                    return loginResponse
                }
            })
        }
    }
})