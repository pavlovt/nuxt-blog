<template>
  <div class="dropdawn-form">
    <label class="dropdawn-label" v-if="label" :for="id">{{label}}</label>
    <select v-model="selectedOption" :id="id" :placeholder="placeholder" ref=select :value="value" @change="update($event.target.value)">
      <option v-for="item in data" :value="item.value" :key="item.value">{{item.label}}</option>
    </select>

    <span class="help is-danger" v-show="errors && errors.has(this.name)">
      {{ errors && errors.first(this.name) }}
    </span>
  </div>
</template>

<script>
import Choises from "choices.js";
// import 'choices.js/assets/styles/css/base.min.css'
import "choices.js/assets/styles/css/choices.min.css";

export default {
  name: "xselect",
  // ['label', 'name', 'placeholder', 'id', 'type'],
  props: {
    value: String | Number,
    label: {
      type: String     
    },
    name: {
      type: String,
      required: true
    },
    placeholder: String,
    id: {
      type: String,
      default: function(val) {
        return val || `form-select-${this.name}`;
      }
    },
    data: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({
        itemSelectText: "",
        searchEnabled: false,
      })
    }
  },
  // makes errors property available
  inject: ["$validator"],
  data() {
    return {
      el: {},
      selectedOption: _.filter(this.data, (d) => d.selected)[0].value
    };
  },
  methods: {
    update(val) {
      this.$emit("input", val);
    }
  },
  mounted() {
    this.el = new Choises(this.$el.querySelector("select"), this.options);
  },
  watch: {
    data() {
      this.el.setChoices(this.data, "value", "label", false);
    },
    value() {
      // visually update the selected value
      // this.$refs.select.value = this.value
      this.el.setValueByChoice(this.value)
    }
  }
};
</script>

<style scoped lang="scss">

.dropdawn-form {
  width: 100%;
}

.dropdawn-label {
  margin-left: 8px;
}

</style>