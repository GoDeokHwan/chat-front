<template>
  <div class="content">
    <div class="login-content">
      <div class="left-content">
        <div style="margin-top: calc(100% - 117px);">
          <h1>LOGIN</h1>
          <div class="idForm">
            <input type="text" class="input-css id" placeholder="ID">
          </div>
          <div class="passForm" style="margin-top: 20px; margin-bottom: 20px;">
            <input type="password" class="input-css pw" placeholder="PW">
          </div>
          <button type="button" class="btn btn-salmon" onclick="button()">
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
export default {
  name: "Login",
  mounted() {

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