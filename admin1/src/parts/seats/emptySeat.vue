<template>
    <svg :x='x'
            :id='id'
            :y='y'
            xmlns="http://www.w3.org/2000/svg" :width="svgDim" :height="svgDim" :viewBox="svgViewBox" version="1.1">
        <g fill="#E2E2E2" fill-rule="nonzero">
            <path d="M12.55 24.35c1.35 0 2.65-.2 3.85-.6L.7 8.1C.25 9.4 0 10.75 0 12.2c0 6.7 5.6 12.15 12.55 12.15zM16.1 32.55h-1.85L41.7 60h10.9L23.4 30.8c-2.2 1.15-4.65 1.75-7.3 1.75zM32.25 16.45c0 2.45-.55 4.8-1.55 6.85L60 52.6V41.7L32.25 13.95v2.5zM25.05 12.2c0-6.75-5.6-12.2-12.5-12.2C11 0 9.55.25 8.2.75l16 16c.55-1.4.85-2.95.85-4.55zM32.25 1.5V12L60 39.75v-10.9L32.3 1.1c-.05.15-.05.25-.05.4zM33.75 0c-.2 0-.35.05-.5.1L60 26.9V15.95L44.05 0h-10.3zM56.9 0H45.95L60 14.05V3.1zM1.5 32.55h-.1L28.85 60h10.9L12.3 32.55H1.5zM23.5 18.05L6.8 1.35c-2.35 1.2-4.3 3.1-5.5 5.4l16.5 16.5c2.4-1.1 4.45-2.9 5.7-5.2zM24.65 30.1L54.55 60h3.95c.85 0 1.5-.65 1.5-1.5v-3.95L30.05 24.6c-1.35 2.25-3.2 4.15-5.4 5.5zM0 34.05V44l15.95 16h10.9L.2 33.3c-.1.25-.2.5-.2.75zM0 56.9L3.1 60h10.95L0 45.95z"/>
        </g>
    </svg>

</template>

<script>

  export default {
    name: "emptySeat",
    props: {
      x: Number,
      y: Number,
      id: String,
    },
    data: () => ({
      svgWidthHeight: 30,
      svgBoxDimensions: 60,
    }),
    methods: {

    },
    mounted() {

    },
    computed: {
      svgDim() {
        return `${this.svgWidthHeight}px`
      },
      svgViewBox() {
        return `0 0 ${this.svgBoxDimensions} ${this.svgBoxDimensions}`
      },
    }
  };
</script>

<style lang="scss" scoped>
    .empty-seat {
        border: 5px solid red;
    }
</style>