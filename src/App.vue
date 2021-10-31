<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      token: localStorage.getItem("token")
    }
  },
  watch: {
    token: function() {
      if (!this.token) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}

.input-css {
  height: auto;
  line-height: normal;
  padding: .8em .5em;
  width: 80%;
}

.btn {
  background-color: dodgerblue;
  color: white;
  padding: 2em 3em;
  border: none;
  transition: all .3s ease;
  border-radius: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  align-self: center;
  cursor: pointer;
  font-weight: bold;
  width: 84%;
}
.btn:hover {
  background-color: darkblue;
}
</style>