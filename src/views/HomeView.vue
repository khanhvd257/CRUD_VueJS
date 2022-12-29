<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h6>
      <router-link to="/user">Management</router-link>
    </h6>
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
