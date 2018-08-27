<template>
  <form>
  	<slot></slot>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component()
export default class XForm extends Vue {
	@Prop() private msg!: string;
}
</script>
