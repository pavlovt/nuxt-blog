<template>
  <button :type="type" class="btn btn-primary">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'xaction',
    // ['label', 'name', 'placeholder', 'id', 'type'],
    props: {
      type: {
        type: String,
        default: 'submit'
      }
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    },
  };
</script>

<style scoped lang="scss">
  .btn {
    border: 0px outset rgb(173, 173, 173);
    box-shadow: 0 0 12px rgb(145, 145, 145);
    padding: 15px;
    margin-top: 50px;
    margin-bottom: 40px;
    width: 388px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
  }

  .btn,
  .form-control {
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
    border-top-left-radius: 13px;
  }

  .btn-primary,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:visited {
    background-color: #00A6CE !important;
  }
</style>