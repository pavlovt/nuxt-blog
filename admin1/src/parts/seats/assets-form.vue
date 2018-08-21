<template>
  <form @submit.prevent=submit>
    <h3 class="text-center">Asset info</h3>
    <!-- Room form -->
    <div v-show="asset.type">
      <xselect name=type label="Room type" v-model=frm.type :data=roomTypes />
      <xinput 
        name="xnumber" 
        type="number" 
        v-model="frm.number" 
        label="Room Number" 
        v-validate="'required|numeric'">
      </xinput>

    </div>
    <!-- Seat form -->
    <div v-show="!asset.type">
      <xinput 
        name="roomNumber" 
        type="number" 
        v-model="frm.roomNumber" 
        label="Room Number" 
        v-validate="'required|numeric'">
      </xinput>

      <xinput 
        name="ynumber" 
        type="number" 
        v-model="frm.number" 
        label="Place Number" 
        v-validate="'required|numeric'">
      </xinput>
    </div>

    <xaction>Save changes</xaction>
  </form>
</template>
<script>
import { observer } from 'mobx-vue'
export default observer({
  props: {
    asset: {
      type: Object,
      default: () => ({})
    },
    saveFloorAssets: Function
  },
  data: () => ({
    frm: {},
    roomTypes: _.map(store.floor.roomTypes, v => ({value: v, label: v, selected:true}))
  }),
  methods: {
    submit() {
      if (store.floor.isValid(this.frm)) {
        store.floor.saveAsset(this.frm)
      } else {
        msg.error('Please fill all the required fields!')
      }
    },
  },
  computed: {

  },
  watch: {
    asset(asset) {
      // fill the form with data from the selected asset
      this.frm = {}
      _.assign(this.frm, asset)
    }
  }
})
</script>
