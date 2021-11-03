<template>
  <div class="item-area">
    <div class="item-title">{{title}}
      <span style="float: right">{{lastTime}}</span>
    </div>
    <div class="item-text">{{textMessage}}</div>
  </div>
</template>

<script>
export default {
  name: "chat-item",
  props: {
    title: {
      type: String
    },
    lastTime: {
      type: String
    },
    message: {
      type: String
    }
  },
  data () {
    return {
      textMessage: '',
      propsMessage: this.message
    }
  },
  watch: {
    'message': function(nVal, oVal) {
      if (this.message) {
        let obj = JSON.parse(this.message)
        if (obj.type == 'TEXT') {
          this.textMessage = obj.message
        }
      }
    }
  },
  created() {
    if (this.message) {
      let obj = JSON.parse(this.message)
      if (obj.type == 'TEXT') {
        this.textMessage = obj.message
      }
    }
  }
}
</script>

<style scoped>
.item-area {
  height: 80px;
  width: calc(100% - 1px);
  border: 1px solid gray;
}

.item-title {
  width: 98%;
  height: 35%;
  border-bottom: 1px solid gray;
  color: black;
  font: message-box;
  font-family: math;
  text-align: left;
  padding: 2px 5px 2px 5px;
}

.item-text {
  width: 98%;
  height: 65%;
  color: black;
  font: message-box;
  font-family: math;
  text-align: left;
  padding: 2px 5px 2px 5px;

  display: -webkit-box;
  display: -ms-flexbox;
  margin-top:1px;
  max-height:54%;
  overflow:hidden;
  vertical-align:top;
  text-overflow: ellipsis;
  word-break:break-all;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;

}

</style>