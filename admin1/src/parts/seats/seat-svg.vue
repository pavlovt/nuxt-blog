<template>
  <svg version="1.1"
    :width="svgDim"
    :height="svgDim" 
       :id="id"
    class="draggable selectable seat-svg"
    :class="{selected: selectedSeatId === id}"
    :x="x"
    :y="y"
    :viewBox="svgViewBox"
    @click="selectSeat(id)"
    :currentZoom="currentZoom"
    @mouseover="showHandle = true"
    @mouseleave="showHandle = false"
    :style="{overflow: 'visible'}"
    >
    <title>{{employeeFirstName}} {{employeeLastName}}</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <clipPath id="circleView">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#FFF"></circle>        
      </clipPath>
        <filter id="dropshadow" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> <!-- stdDeviation is how much to blur -->
        <feOffset dx="1" dy="1" result="offsetblur"/>
        <feOffset dx="-1" dy="-1" result="offsetblur"/>
        <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
        </filter>
    </defs>
    <g fill="none" fill-rule="nonzero" :transform="svgRotateTransform" :class="zoomLevel(store.zoom.currentZoom)">
        <path id="seat-path" :fill="fillAndHover(floorStore.isSelected(id))[1]" d="M34.1 4c0-1.4 1.1-2.5 2.5-2.5H56c1.4 0 2.5 1.1 2.5 2.5v52c0 1.4-1.1 2.5-2.5 2.5H4c-1.4 0-2.5-1.1-2.5-2.5V36.2c0-1.4 1.1-2.5 2.5-2.5h12.4c9.7 0 17.6-7.9 17.6-17.6V4h.1z"/>
        <path id="seat-path" :fill="fillAndHover(floorStore.isSelected(id))[0]" d="M56 60H4c-2.2 0-4-1.8-4-4V36.2c0-2.2 1.8-4 4-4h12.4c8.9 0 16.1-7.2 16.1-16.1V4c0-2.2 1.8-4 4-4H56c2.2 0 4 1.8 4 4v52c0 2.2-1.8 4-4 4zM4 35.2c-.6 0-1 .4-1 1V56c0 .6.4 1 1 1h52c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H36.6c-.6 0-1 .4-1 1v12.1c0 10.5-8.6 19.1-19.1 19.1H4z"/>

        <g v-if="!isOwnSeat" >
          <circle id="seat-path" style="filter:url(#dropshadow)" cx="12.5" cy="12.5" r="12.5" :fill="fillAndHover(floorStore.isSelected(id))[1]"></circle>
          <text id="seat-path" :fill="fillAndHover(floorStore.isSelected(id))[3]" v-if="number > 9 && number < 100" class="text-seat-number" x="4" y="18" :transform="imageRotateTransform">{{number}}</text>
          <text id="seat-path" :fill="fillAndHover(floorStore.isSelected(id))[3]" v-if="number < 10" class="text-seat-number" x="8" y="18" :transform="imageRotateTransform">{{number}}</text>
          <text id="seat-path" :fill="fillAndHover(floorStore.isSelected(id))[3]" v-if="number > 99" class="text-seat-number text-small" x="2" y="16" :transform="imageRotateTransform">{{number}}</text>
          <text id="seat-path" :fill="fillAndHover(floorStore.isSelected(id))[4]" class="hidden-number" x="40" y="19" >{{number}}</text>
        </g>
       <g>
          <text id="seat-path" :display="fillAndHover(floorStore.isSelected(id))[2]" :fill="fillAndHover(floorStore.isSelected(id))[2]" class="text-user-info" x="6" y="46">{{employeeFirstName}}</text>
          <text id="seat-path" :display="fillAndHover(floorStore.isSelected(id))[2]" :fill="fillAndHover(floorStore.isSelected(id))[2]" class="text-user-info" x="6" y="54">{{employeeLastName}}</text>
       </g>
        <g v-if="isOwnSeat">
          <image id="seat-path" width="25" height="25.5" v-bind:xlink:href="userImageUrl" clip-path="url(#circleView)" :transform="imageRotateTransform"/>
        </g>
    </g>
    <!-- Handle -->
    <svg v-if="!clone && isEdit" width="24px" x="33" y="15" version="1.1" :id="handleId"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        class="handle-seat-svg"
        v-on:click="rotateSvg"
        :transform="svgRotateTransform"
        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
    <rect x="0" fill="transparent" width="24" height="24"/>
    <title>icon/edit copy</title>
    <desc>Created with Sketch.</desc>
    <g id="icon_x2F_edit-copy">
      <rect id="Rectangle" x="0" fill="transparent" width="24" height="24"/>
      <path id="Fill-1" class="st2" fill="#141113" d="M24,18.8L24,18.8c-0.1-0.3-0.2-0.5-0.4-0.7l-1.1-0.9c0.7-1.5,1.1-3.2,1.1-4.9
        c0.1-6.1-4.3-11.4-10.3-12.2C6.2-0.8,0,4.9,0,12c0,6,4.4,11.2,10.3,11.9l0.2,0c0.7,0,1.2-0.6,1.2-1.2c0-0.7-0.5-1.2-1.2-1.3
        c-5.4-0.7-9.3-6.2-7.8-12C3.7,6,6.6,3.3,10.2,2.6c5.9-1,11,3.6,11,9.4c0,1.2-0.2,2.3-0.6,3.4l-1.1-0.9c-0.2-0.2-0.6-0.3-0.9-0.3
        c-0.3,0-0.6,0.2-0.8,0.4c-0.2,0.2-0.3,0.5-0.3,0.7L17.2,20c0,0.3,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.4,0.8,0.4c0.1,0,0.2,0,0.2,0l4.5-1
        C23.7,20.1,24.1,19.4,24,18.8"/>
    </g>
    </svg>
    <foreignObject
      :x="userCardPos"
      :y="userCardPos"
      class="employee-card-container"
      v-if="store.floor.selectedAsset.id === id && !isEdit">
      <desk-card :employeeId="employeeId"></desk-card>
    </foreignObject>
  </svg>
</template>
<script>
import deskCard from './desk-card.vue'

import { observer } from 'mobx-vue'

export default observer({
  name: "seat-svg",
  props: {
    x: Number,
    y: Number,
    id: String,
    clone: Boolean,
    number: Number | String,
    isOwnSeat: Boolean,
    currentZoom: Number,
    rotation: {
      type: Number,
      default: 0
    },

    mode: {
      type: String,
      required: true
    },
    selectedSeatId: {
      type: String,
      default: ''
    },
    employeeId: String,
    employeeFirstName: String,
    employeeLastName: String,
    setSelectedAsset: Function
  },
  components: {
    deskCard
  },
  data: () => ({
    draggableConfig: {
      cursor: "move",
      grid: [1, 1],
      containment: "#dropzone"
    },
    selSmColor: ['#00a6ce','#00a6ce','#00a6ce','#00a6ce','#00a6ce'],
    selMdColor: ['#00a6ce','#00a6ce','#00a6ce','#00a6ce','#ffffff'],
    selBgColor: ['#00a6ce','#00a6ce','#ffffff','#00a6ce','#ffffff'],
    nSelSmColor: ['#48dbff', '#ffffff', '#ffffff', '#ffffff','#ffffff'],
    nSelMdColor: ['#48dbff', '#ffffff', '#ffffff', '#000000','#ffffff'],
    nSelBgColor: ['#48dbff', '#ffffff', '#000000', '#000000','#ffffff'],
    hovSmColor: ['#48dbff', '#48dbff', '#48dbff', '#48dbff', '#48dbff'],
    hovMdColor: ['#48dbff', '#ffffff', '#ffffff', '#000000', '#ffffff'],
    hovBgColor: ['#48dbff', '#ffffff', '#000000', '#000000', '#ffffff'],
    show: ['block'],
    userAvatarUrl: '',
    svgBoxDimensions: 50,
    svgWidthHeight: 25,
    showHandle: false,
    floorStore: store.floor,
    userPicDimensions: 25,
    zoomStore: store.zoom,
    rotate: 0,
    isSelected: false,
  }),
  methods: {
    selectSeat(seatId) {
      if (seatId) {
        this.floorStore.setSelectedAsset(seatId)
      }
    },
    rotateSvg() {
      var rotationStep = 22.5
      this.rotate += rotationStep
      
      this.floorStore.setRotation(this.id, this.rotate)
    },
    zoomLevel(zoom) {
      if (zoom >= 0.1 && zoom <= 1.1) {
        return 'small'
      }

      if (zoom > 1.1 && zoom <= 1.55) {
        return 'middle'
      }

      if (zoom > 1.55) {
        return 'big'
      }
    },
    fillAndHover(isSelected) {
      var self = this

      if (this.showHandle === true && self.zoomLevel(store.zoom.currentZoom) === 'small') {
        return this.hovSmColor
      }

      if (isSelected && self.zoomLevel(store.zoom.currentZoom) === 'small') {
        return this.selSmColor
      }

      if (isSelected && self.zoomLevel(store.zoom.currentZoom) === 'middle') {
        return this.selMdColor

      }

      if (isSelected && self.zoomLevel(store.zoom.currentZoom) === 'big') {
        return this.selBgColor

      }

      if (!isSelected && self.zoomLevel(store.zoom.currentZoom) === 'small') {
        return this.nSelSmColor
      }

      if (!isSelected && self.zoomLevel(store.zoom.currentZoom) === 'middle') {
        return this.nSelMdColor
      }

      if (!isSelected && self.zoomLevel(store.zoom.currentZoom) === 'big') {
        return this.nSelBgColor
      }
    },
  },
  mounted() {
    const self = this;

    self.rotate = this.rotation

    if (this.mode && this.isEdit) {
      $(".draggable").draggable(
        Object.assign({}, self.draggableConfig, {
          helper: this.clone ? "clone" : "",
          drag: (e, ui) => {
            self.floorStore.updateSelectedSeat(
              self.floorStore.constructSeatObj(
                $(self.draggableConfig.containment),
                ui
              )
            );
          },
          start: () => {
            $('#dropzone *').css("cursor", "none")
          },
          stop: () => {
            $('#dropzone *').css("cursor", "pointer")
          }
        })
      );
    }

    if (this.isOwnSeat) {
      this.userAvatarUrl = store.auth.user.profilePic;
    }
  },
  computed: {
    svgRotateTransform() {
      return `rotate(${this.rotate} ${this.svgBoxDimensions / 2} ${this.svgBoxDimensions / 2})`
    },

    imageRotateTransform() {
      return `rotate(-${this.rotate} ${this.userPicDimensions / 2} ${this.userPicDimensions / 2})`
    },

    svgViewBox() {
      return `0 0 ${this.svgBoxDimensions} ${this.svgBoxDimensions}`
    },

    userCardPos() {
      return (this.svgWidthHeight / 2) + 10;
    },

    svgDim() {
      return `${this.svgWidthHeight}px`
    },

    handleId() {
      return `handle-${this.id}`
    },

    userImageUrl() {
      return store.auth.image
    },

    isEdit() {
      return this.mode === 'edit'
    }
  }

})

</script>
<style lang="scss">
.seat-svg {
  position: relative;
}
.st3,
.st0 {
  fill: #ffffff;
}
.st1 {
  fill: #48dbff;
}
.draggable {
  float: left;
  z-index: 50;
  cursor: pointer;
}
.selected .st1 {
  fill: orange;
}

.selected .st3 {
  fill: orange;
}
circle {
  /*stroke: #000;*/
  stroke-width: 0.5;
}

text.text-user-info {
  font-family: sans-serif;
  font-size: 8px;
  font-weight: bold;
  overflow: hidden;
}

text.hidden-number {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
}

text.text-seat-number  {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
overflow: hidden;

  &.text-small {
    font-size: 12px;
  }
}

.employee-card-container {
  position: relative;
  z-index: 60;
  width: 500px;
}

</style>
