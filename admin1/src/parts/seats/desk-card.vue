<template>
  <div class="emp-card-container">
    <employee-card v-if="!loading" :user="employeeData" :isViewOnly="true"></employee-card>
    <spinner v-else></spinner>
  </div>
</template>
<script>
import employeeCard from 'src/parts/core/navbar/employee-card.vue';
import spinner from 'src/parts/core/spinner.vue'

export default {
  name: 'desk-card',
  components: {
    employeeCard,
    spinner
  },
  props: {
    employeeId: String
  },
  data: () => ({
    s: store.employee,
    empData: {},
    loading: false
  }),
  methods: {
    getEmployeeData() {
      this.loading = true
      this.s.getEmployeeData(this.employeeId)
        .then(data => this.empData = data)
        .then(() => this.loading = false)
        .catch(() => this.loading = false)
    }
  },
  mounted() {
    this.getEmployeeData()
  },
  computed: {
    isEmployeeEmpty() {
      return _.isEmpty(this.s.employeeData)
    },
    employeeData() {
      return this.empData
    }
  }
}
</script>
<style lang="scss" scoped>
  .emp-card-container {
    
  }
</style>
