<template>
  <div class="content">
    <div class="login-content">
      <div class="left-content">
        <div style="margin-top: calc(100% - 117px);">
          <h1>LOGIN</h1>
          <div class="idForm">
            <input type="text" class="input-css id" placeholder="ID" v-model="id" v-on:keyup.enter="login">
          </div>
          <div class="passForm" style="margin-top: 20px; margin-bottom: 20px;">
            <input type="password" class="input-css pw" placeholder="PW" v-model="pw" v-on:keyup.enter="login">
          </div>
          <button type="button" class="btn btn-salmon" v-on:click="login">
            LOGIN
          </button>
        </div>
      </div>
      <div class="right-content">

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    login () {
      if (!!this.id && !!this.pw) {
        this.$store.dispatch('login', {
          loginId: this.id,
          password: this.pw
        }).then((res) => {
          if (res.isSuccess) {
            this.$router.push('/home')
          } else {
            alert(res.data.message)
          }
        }).catch(err => {
          alert(err)
        })
      } else {
       alert('아이디 또는 비밀번호를 입력해주세요.')
      }
    }
  }
}
</script>
<style scoped>
.content {
  text-align: center;
  vertical-align: middle;
  height: 100%;
  background-image: url('../image/login-background.jfif');
  background-repeat: no-repeat;
  background-size: cover;
}
.login-content {
  min-width: 1000px;
  width: 40%;
  min-height: 600px;
  height: 100%;
  display: inline-block;
}
.left-content {
  vertical-align: center;
  width: 40%;
  height: 100%;
  min-height: 893px;
  float: left;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
.right-content {
  background-image: url('../image/login-banner.png');
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center;
  border-right: 1px solid gray;
  width: 59%;
  height: 100%;
  min-height: 893px;
  float: right;
}

.btn-salmon {
  background-color: salmon;
  color: white;
}

.btn-salmon {
  background-color: coral;
}
</style>