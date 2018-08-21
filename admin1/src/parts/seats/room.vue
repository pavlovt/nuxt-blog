<template>
  <svg width="1000" height="1000" x="0" y="0"
    @click="store.floor.setSelectedAsset(room.id)"
    @mouseover="showHandle = true"
    @mouseleave="showHandle = false">
    <g>
      <polygon ref="polygon" :points="room.position" strokewidth="1" :fill="fillPolygon" stroke="#000000"></polygon>
      <foreignObject :x="getDimensions.x" :y="getDimensions.y" :width="getDimensions.width" :height="getDimensions.height">
        <div class="inner">
          <div xmlns="http://www.w3.org/1999/xhtml" class="container-text-room">
              <img v-if="room.type && room.type != 'WorkSpace'" class="room-icons" :src="'/svg/icons/' + room.type + '.svg'"/>
              <div class="room-name">{{room.type}} <span v-if="room.number" class="text-room-number"> {{room.number}}</span></div>
          </div>
        </div>
      </foreignObject>
    </g>
  </svg>
</template>
<script>
import { observer } from 'mobx-vue'
export default observer({
  name: "room",
  props: {
    room: Object,
    selectedFacilityType: String,
  },
  data: () => ({
    offset: 5,
    dimensions: { width: 0, height: 0 },
    fillColor: 'rgba(72, 219, 255, 0.21)',
  }),
  methods: {
    
  },
  mounted() {
    const {x, y, width, height} = this.$refs.polygon.getBBox()
  
    this.dimensions = {width, height, x, y}
  },
  computed: {
    getDimensions() {
      return this.dimensions
    },
      isHighlighted() {
        return this.room.type == this.selectedFacilityType
      },
      fillPolygon() {
        return this.isHighlighted ? this.fillColor : 'none'
      }
  }
})
</script>

<style lang="scss" scoped>
  @import 'src/styles/variables.scss';
  svg {
    cursor: pointer;
    .inner {
      display: table;
      width: 100%;
      height: 100%;

      .room-name {
        font-size: 14px;
      }

      .container-text-room {
        font-size: 24px;
        font-weight: 900;
        line-height: 24px;
        text-transform: uppercase;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        
        .text-room-number {
          color: $blue;
        }

        .room-icons {
          width: 18px;
        }
      }

    }
  }

</style>
