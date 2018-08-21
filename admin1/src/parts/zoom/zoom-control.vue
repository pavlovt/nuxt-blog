<template>
  <div v-on:click="handler">
    <round-btn
      :isFirst="isFirst"
      :isLast="isLast"
      :id="-1">
      <slot></slot>
    </round-btn>
  </div>
</template>
<script>
import roundBtn from 'src/parts/core/round-btn.vue'

export default {
  name: 'zoom-control',
  components: {
    'round-btn': roundBtn
  },
  props: {
    handler: Function,
    isFirst: Boolean,
    isLast: Boolean
  }
}
</script>
