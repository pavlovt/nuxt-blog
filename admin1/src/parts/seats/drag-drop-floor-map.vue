<template>
  <div>
    <div id="floor-btns" class="wrapper-floor-chooser">
        <floor-btns
          :floors="floorStore.floors"
          :activeFloor="floorStore.selectedFloor"
          :selectFloor="selectFloor">
        </floor-btns>
    </div>
    <div id="draw-container">
        <button @click=draw() class="btn btn-default">Draw</button>
        <seat-svg :clone="true" :mode="mode" :isOwnSeat="false">></seat-svg>
    </div>
    <div id="dropzone" class="floor-map">
      <svg id="floor-map-container" width="1306px" height="1000px" preserveAspectRatio="xMidYMid meet">
        <g id="floor-map-mount"></g>
        <floor-asset v-for="asset in assets" :asset=asset :key="asset.id" :mode="mode"></floor-asset>
      </svg>
    </div>
  </div>
</template>
<script>

import floorBtns from 'src/pages/floor-view/floors/floor-btns.vue'
import floorAsset from 'src/pages/floor-view/floor-asset.vue'
export default {
  name: "drag-drop-floor-map",
  props: {
    selectedSeat: Object,
    assets: Array
  },
  components: {
    'floor-btns': floorBtns,
    'floor-asset': floorAsset
  },

  data: () => ({
    mode: 'edit',
    floorStore: store.floor
  }),

  methods: {
    handleDisableDrag(ev, k) {
      if(ev.ctrlKey) {
        store.zoom.disableDrag()
      }
    },
    handleEnableDrag(ev, k) {
      if(ev.key == 'Control') {
        store.zoom.enableDrag()
      }
    },
    draw() {
      const self = this;
        var poly = new SVG.adopt(this.$el.querySelector('#floor-map-container'))
            .polygon().draw({snapToGrid:1})
            
        poly.on('drawstart', function(e) {
            document.addEventListener('keydown', function(e) {
                if(e.keyCode == 13){
                    poly.draw('done');
                    poly.off('drawstart');
                } else if (e.keyCode == 27){
                    poly.draw('cancel');
                }
            })
        })
        
        poly.on('drawstop', function() {
          $(poly.node).attr({strokeWidth: 1, fill: 'none', stroke: '#000000'})
          self.floorStore.addRoom(poly.node.getAttribute('points'))
          poly.node.remove();
        })
      },
    updateFloorMapComponent(svgDoc) {
      const mountPoint = document.getElementById('floor-map-mount')
      mountPoint.innerHTML = svgDoc
    },
    selectFloor(floorId) {
      this.floorStore.selectFloor(floorId)
      this.initializeFloor()
    },
    initializeFloor() {
      var self = this

      self.floorStore.getFloors()
      .then(() => {
         self.floorStore.getFloorPlan()
        .then(self.updateFloorMapComponent)
        .then(() => {
            $("#dropzone").droppable({
              drop: function(event, ui) {
                self.floorStore.upsertSeatData(self.floorStore.constructSeatObj(this, ui))
              }
            })
        })
        .then(() => {
          //shpakla => this is workaround-fix for problem reproduced when changing the floors
          //If v-show is used or display none outside the vue framework, the assets are not displayed properly    
          setTimeout(() => {
            $('#floor-map-container').css('opacity', '1')
          },100)
        })

        //Uncomment to enable zoom in seats-admin
        //the only issue is with cloning new object and this is why the code is commented

        // .then(() => store.zoom.initialize('#floor-map'))
        // .then(() => {
        //   window.addEventListener('keydown', this.handleDisableDrag)  
        //   window.addEventListener('keyup', this.handleEnableDrag)
        // })
      })
    }
  },

  mounted() {
    this.initializeFloor()
  }
}
</script>
<style>
#dropzone {
  margin: 10px;
  overflow: hidden;
}

#floor-btns{
  margin: 30px;
}

#draw-container svg {
  margin-left: 35px;
  margin-right: 30px;
}

#floor-map-container {
  opacity: 0;
}

.floor-map {
  width: 1306px;
  height: 1000px;
  float: left;
}

.ui-rotatable-handle {
  background: url("https://cdn.jsdelivr.net/jquery.ui.rotatable/1.0.1/rotate.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 15px;
  width: 15px;
  position: absolute;
  top: -15px;
  right: -13px;
}
</style>
