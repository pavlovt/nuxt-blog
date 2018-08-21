<template>
  <div
    class="btn-floor"
    v-bind:class="{activated: activeId === id, first: isFirst, last: isLast}"
    >
    <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'round-btn',
  props: {
    activeId: Number | String,
    id: Number | String,
    isFirst: Boolean,
    isLast: Boolean
  }
}
</script>
<style scoped lang="scss">
  @import 'src/styles/variables.scss';

  $border-radius: 8px;
  $btn-height: 40px;
  $btn-font-size: 24px;
  $btn-box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.11);

  .btn-floor {
    height: $btn-height;
    line-height: $btn-height;
    background-color: $white;
    box-shadow: $btn-box-shadow;

    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;

    cursor: pointer;

    color: $blue;
    font-size: $btn-font-size;
    font-weight: bold;
    text-align: center;

    &.activated {
      background: $blue;
      color: $white;
    }

    &.first {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    &.last {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
</style>