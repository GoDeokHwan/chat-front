<template>
  <div>
    <div class="message-area you-message">
      <div class="title-circle title-position-you"></div>
      <div class="message-box">상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에
        메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지</div>
    </div>
    <div class="message-area my-message">
      <div class="message-box" style="margin-right: 10px; text-align: left;">상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에
        메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지상대방에 메시지</div>
      <div class="title-circle title-position-my"></div>
    </div>


  </div>
</template>

<script>
export default {
  name: "chat-contents"
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