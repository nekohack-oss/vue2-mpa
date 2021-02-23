<template>
  <div id="v-hello-mpa">
    <img alt="Vue logo" :src="iconImageSource" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      iconImageSource: './vue-dist/img/logo.png'
    }
  }
})
</script>

<style lang="scss">
#v-hello-mpa {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
