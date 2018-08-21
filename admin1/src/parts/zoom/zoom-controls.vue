<template>
  <div>
    <zoom-control :isFirst="true" :handler="attachZoomInHandler">+</zoom-control>
    <zoom-control :isLast="true" :handler="attachZoomOutHandler">-</zoom-control>
  </div>
</template>
<script>
import zoomControl from './zoom-control.vue'

export default {
  name: 'zoom-controls',
  components: {
    'zoom-control': zoomControl
  },
  props: {
    attachZoomInHandler: Function,
    attachZoomOutHandler: Function,
    attachResetHandler: Function
  },
  data: () => ({

  })
}
</script>

