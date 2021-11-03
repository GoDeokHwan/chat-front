import SockJS from 'sockjs-client'
import StompClient from 'webstomp-client'
import eventBus from '../../../event_bus'

const getDefaultState = () => {
    return {
        stompClient: null,
        isConnecting: false,
        isConnected: false,
        subscriptions: []
    }
}
const state = getDefaultState()

const getters = {
    IS_CONNECT_SUCCESS: (state) => { return state.isConnected },
    SUBSCRIPTIONS: (state) => { return state.subscriptions }
}

const mutations = {
    START_CHAT_API_CONNECT (state) {
        // Connect 시도
        state.isConnecting = true
    },
    END_CHAT_API_CONNECT (state) {
        // Connect 시도 후 Connect 완료
        state.isConnecting = false
        state.isConnected = true
        state.stompClient.connected = true
        return true
    },
    FAIL_CHAT_API_CONNECT (state) {
        // Connect 실패
        state.isConnecting = false
        state.isConnected = false
        if (this.state.stompClient) {
            state.stompClient.connected = false
        } else {
            state.stompClient = null
        }
    },
    forceCloseConnection (state) {
        if (state.subscriptions.length > 0) {
            console.warn('모든 소캣 종료')
            state.subscriptions.forEach(releasable => {
                releasable.subscriptions.unsubscribe()
            })
            state.subscriptions = []
        }
    },
    subscribe (state, payload) {
        let subscription
        if (state.subscriptions.length > 0) {
            let subscriptionArr = state.subscriptions.filter(s => s.key == payload.key)
            if (subscriptionArr && subscriptionArr.length > 0) {
                subscription = subscriptionArr[0]
            }
        }
        if (subscription === undefined) {
            subscription = state.stompClient.subscribe(payload.subscriptionUrl,
                    tick => payload.callBack(JSON.parse(tick.body)))
            const  newSubscription = {
                key: payload.id,
                subscriptionUrl: payload.subscriptionUrl,
                id: subscription.id,
                subscription: subscription
            }
            state.subscriptions.push(newSubscription)
        }
        return subscription.id
    },
    closeSubscription (state, prefix) {
        let filtered = state.subscriptions
            .filter(e => e.key.includes(prefix))

        state.subscriptions = state.subscriptions
            .filter(e => !e.key.includes(prefix))
        filtered.forEach(releasable => {
            releasable.subscription.unsubscribe()
        })
    }
}

const actions = {
    async chat_api_connect({commit, state}) {
        commit('START_CHAT_API_CONNECT')
        // state.stompClient = Stomp.over(new SockJS('http://localhost:8180/api/webSocket'))
        state.stompClient = StompClient.over(new SockJS('http://localhost:8180/api/webSocket'))
        state.stompClient.connect({},
            frame => {
                commit('END_CHAT_API_CONNECT')
                eventBus.$emit('chat-socket-connection_success')
                return true
            },
            error => {
                commit('forceCloseConnection')
                commit('FAIL_CHAT_API_CONNECT')
                eventBus.$emit('chat-socket-reconnect')
            }
        )
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}