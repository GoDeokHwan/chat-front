<template>
  <div>
    <div v-for="item in messageList">
      <div class="message-area you-message" v-if="!item.isMy">
        <div class="title-circle title-position-you"></div>
        <div class="message-box">{{item}}</div>
      </div>
      <div class="message-area my-message" v-else>
        <div class="message-box" style="margin-right: 10px; text-align: left;">{{item.message}}</div>
        <div class="title-circle title-position-my"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat-contents',
  props: ['messageItem'],
  data () {
    return {
      messageList: this.messageItem
    }
  },
  created() {
    this.messageList.map(m => {
      let obj = JSON.parse(m.context)
      m['message'] = obj.message
      m['type'] = obj.type
      return m
    })
  }
}
</script>

<style scoped>
.title-circle {
  width: 70px;
  height: 70px;
  background: black;
  border-radius: 50%;
}
.message-area {
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

.title-position-you {
  text-align: left;
  display: inline-block;
}
.you-message {
  text-align: left;
}
.my-message {
  text-align: right;
}

.title-position-my {
  text-align: right;
  display: inline-block;
}

.message-box {
  max-width: calc(100% - 300px);
  min-width: 300px;
  border-radius: 15px;
  border: 1px solid gainsboro;
  background: white;
  display: inline-block;
  vertical-align: middle;
  padding: 15px;
}
</style>