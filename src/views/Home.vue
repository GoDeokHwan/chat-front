<template>
  <div class="content">
    <div class="area">
      <div class="left-area">
        <div class="left-top-area">
          <h3>채팅방</h3>
          <div>전체 : {{total}}</div>
        </div>
        <div class="left-bottom-area">
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
          <chat-item></chat-item>
        </div>
      </div>
      <div class="right-area">
        <div class="chat-room">
          <div style="height: calc(100% - 95px); overflow-y: auto; padding-bottom: 20px;">
            <chat-contents></chat-contents>
            <chat-contents></chat-contents>
            <chat-contents></chat-contents>
            <chat-contents></chat-contents>
            <chat-contents></chat-contents>
            <chat-contents></chat-contents>
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

export default {
  name: 'Home',
  components: { chatItem, chatContents },
  data() {
    return {
      total: 0
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
</style>
