<template>
  <container class="text-center">
  	<row class="top">
    	<col>Login Page</col>
    </row>

    <row class="middle">
    	<col>Login Here</col>
    </row>

    <row class="bottom">
    	<col>Login Foot</col>
    </row>

  </container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Login extends Vue {}
</script>

<style scoped>
	/*.container {
		height: 80vh;
	}*/

	.container > .row {
		height: 20vh;
	}
</style>