<template>
  <div class="content">
    <div class="area">
      <div class="left-area">
        <div class="left-top-area">
          <h3>채팅방</h3>
          <div style="">
            전체 : {{total}}
            <button class="btn create-btn" v-on:click="createChatRoom">신규생성</button>
          </div>
        </div>
        <div class="left-bottom-area">
          <div v-for="chat in chatList" :key="chat.chatRoomId" v-on:click="chatRoomOpen(chat)" :class="{ on : isSelectOn(chat.chatRoomId)}">
            <chat-item :title="chat.userView.name"
                       :last-time="chat.lastMessageTime ? chat.lastMessageTime : chat.createDate"
                       :message="chat.lastMessage"
            ></chat-item>
          </div>
        </div>
      </div>
      <div class="right-area">
        <div class="chat-room">
          <div style="height: calc(100% - 95px); overflow-y: auto; padding-bottom: 20px;">
            <div v-for="m in openMessageList" :key="m.id">
              <chat-contents :message-item="m"
                ></chat-contents>
            </div>
          </div>
          <div style="float: bottom; border-top: 1px solid gray;">
            <input type="text" class="input-css input-position" placeholder="메시지를 입력해주세요."/>
            <button class="btn btn-size">전송</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chatItem from '../components/chat-item.vue'
import chatContents from '../components/chat-contents.vue'
import eventBus from '../event_bus'
import {mapGetters, mapMutations} from 'vuex'
import JwtDecode from 'jwt-decode'

export default {
  name: 'Home',
  components: { chatItem, chatContents },
  computed: {
    ...mapGetters([
      'IS_CONNECT_SUCCESS'
    ])
  },
  data() {
    return {
      total: 0,
      userId: null,
      name: null,
      chatList: [],
      openMessageList: [],
      selectChatRoomId: null
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      const storageData = JSON.parse(JwtDecode(localStorage.getItem("token")).details)
      this.userId = storageData.id
      this.name = storageData.name
    }

    eventBus.$on('chat-socket-connection_success', () => {
      this.chatRoomAllSubscribe()
    })

    if (this.IS_CONNECT_SUCCESS) {
      this.chatRoomAllSubscribe()
    } else {
      this.connectWebSocket()
    }

    this.chatRommList()
  },
  beforeDestroy() {
    eventBus.$off('chat-socket-connection_success')
  },
  methods: {
    ...mapMutations([
        'subscribe'
    ]),
    connectWebSocket() {
      this.$store.dispatch('chat_api_connect')
    },
    chatRoomAllSubscribe () {
      this.subscribe({
        subscriptionUrl: `/api/subscribe/user/${this.userId}`,
        callBack: this.chatRoomAllWebSocketData
      })
    },
    chatRoomAllWebSocketData (data) {
      console.log(`>> >> >> ${data}`)
    },
    chatRommList () {
      this.axios.get(`/api/v1/chat`).then(res => {
        if (res.status == 200 && res.data.code === 0) {
          let data = res.data.data
          this.chatList = data
          this.total = data.length
        } else {
          alert(res.message)
        }
      })
    },
    createChatRoom () {
      this.axios.post(`/api/v1/chat`, {
        userId: this.userId
      }).then(res => {
        if (res.status == 200 && res.data.code === 0) {
          let data = res.data.data
          this.chatList.push(data)
          this.total += 1
        } else {
          alert(res.message)
        }
      })
    },
    chatRoomOpen (data) {
      this.selectChatRoomId = data.chatRoomId
      this.openMessageList = []
      this.axios.get(`/api/v1/chat/${data.chatRoomId}`, {
        params: {
          userId: this.userId
        }
      }).then(res => {
        if (res.status == 200 && res.data.code === 0) {
          let data = res.data.data
          if (data.length > 1) {
            this.openMessageList = data.map(d => {
              d['isMy'] = d.sendUser.id === this.userId
              return d
            })
          } else {
            this.openMessageList.push(data.map(d => {
              d['isMy'] = d.sendUser.id === this.userId
              return d
            }))
          }
        } else {
          alert(res.message)
        }
      })
    },
    isSelectOn (chatRoomid) {
      return this.selectChatRoomId === chatRoomid
    }
  }
}
</script>

<style scoped>
.content {
  text-align: center;
  vertical-align: middle;
  height: 100%;
}
.area {
  width: 1300px;
  height: 880px;
  display: inline-block;
}
.left-area {
  border-right: 1px solid black;
  height: 880px;
  min-width: 50px;
  width: 30%;
  float: left;
}
.right-area {
  /*background: blue;*/
  height: 880px;
  width: calc(70% - 1px);
  float: right;
}
.left-top-area {
  height: 100px;
  background: beige;
  padding-top: 10px;
}

.left-bottom-area {
  height: 771px;
  overflow-y: auto;
  overflow-x: hidden;
}

.chat-room {
  background: ghostwhite;
  height: 100%;
  width: 100%;
}

.input-position {
  margin-top: 15px;
  width: calc(100% - 170px);
  text-align: left;
}

.btn-size {
  width: 100px;
  height: 44px;
  padding: 12px;
}

.create-btn {
  width: 100px;
  height: 25px;
  padding: 0px;
  float: right;
  margin-right: 5px;
}

.on {
  background: red;
}
</style>
