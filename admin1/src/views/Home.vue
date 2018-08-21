<template>
  <div class="home">
    count {{count}}
    <a href="#" @click="$store.commit('inc')">Inc</a>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { sync } from 'vuex-pathify'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  computed: {
    /*count() {
      return this.$store.state.count * 2
    }*/
    ...sync('*')
  }
}
</script>
