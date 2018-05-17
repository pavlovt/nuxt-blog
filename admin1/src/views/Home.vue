<template lang="ehtml">
  div.row {
      div.col {
          form :submit=submit() {
              input type=number {}

              button.btn.btn-primary { 'Submit' }
          }
      }
  }
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// const t = require('./t.ehtml')
// console.log('ttt', t)
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    submit() {}
  }
}
</script>
