<template>
  <div class="form-group mb-5">
    <label class="input-label" :for="id">{{label}}</label>
    <input :type="type" ref="input" class="form-control" :class="{'failed-input': errors && errors.has(this.name)}" :id="id" :placeholder="placeholder" @input="update($event.target.value)"
      v-bind="$attrs">
    <span class="help is-danger failed-input-message" v-show="errors && errors.has(this.name)">
      {{ errors && errors.first(this.name) }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'xinput',
    // ['label', 'name', 'placeholder', 'id', 'type'],
    props: {
      value: String | Number,
      label: String,
      name: {
        type: String,
        required: true
      },
      placeholder: String,
      id: {
        type: String,
        default: function (val) {
          return val || `form-input-${this.name}`;
        }
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    // makes errors property available
    inject: ['$validator'],
    data: () => ({
      ref: {}
    }),
    methods: {
      update(val) {
        this.$emit('input', val)
      }
    },
    watch: {
      value() {
        // set the input value
        // for now I haven't found another way
        this.$refs.input.value = this.value
      }
    }
  };
</script>

<style scoped lang="scss">
  //Styles for base input
  .form-group {
    margin-top: 25px;
    margin-bottom: 35px;
    width: 388px;
    max-height: 52px;
    font-family: 'Open Sans', sans-serif;

  }

  .form-control {
    padding: 13px;
    border-color: black
  }

  .form-control {
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
    border-top-left-radius: 13px;
  }

  textarea:focus,
  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus,
  .uneditable-input:focus {
    border-color: #00A6CE;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.0) inset, 0 0 0px #00A6CE;
    outline: 0 none;
  }

  .input-label {
    font-size: 14px;
    margin: 0px;
    margin-left: 8px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;

  } //end of Styles for base input
  // Styles for invalid e-mail or other fails
  .failed-input {
    border-color: #d41b5d;
  }

  .failed-input-message {
    width: 373px;
    height: 18px;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #d41b5d;
    margin-left: 8px;
    font-family: 'Open Sans', sans-serif;
  } //end of Styles for invalid e-mail or other fails
</style>