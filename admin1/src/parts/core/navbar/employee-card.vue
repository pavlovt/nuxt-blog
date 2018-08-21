<template>
  <div v-bind:class="{'dropdown-menu': !isViewOnly, 'employee-card-view': isViewOnly}" class="employee-card" aria-labelledby="dropdownMenuLink">
      <div class="triangle"></div>
      <div class="row">
          <div class="col-3">
              <img :src="user.imageUrl" alt="Avatar" class="large-avatar">
          </div>
          <div class="col-9 user-info">
              <div class="dropdown-item"><b>{{ user.displayName }}</b></div>
              <a v-if="!isViewOnly" href="#" class="log-out-button" @click="store.auth.logout()">Log out</a>
              <div class="dropdown-item position-container">
                  <span>{{ user.jobTitle }}</span>
                  <span>{{ user.unit }}</span>
                  <span>{{ user.project }}</span>
              </div>
              <div class="dropdown-item">
                  <b v-if="user.workPlace">{{ user.workPlace.number }}, {{ user.workPlace.roomNumber }}</b>
              </div>
              <div class="dropdown-item">
                  <b>Phone: </b> {{ user.phone }}
              </div>
              <div class="dropdown-item">
                  <b>E-mail: </b> {{ user.email }}
              </div>
          </div>
          <div class="col-lg-11 interests-container" >
              <div class="interests-list" v-for="(interest, index) in user.interests" :key="interest.id + index">{{ interest.name }}</div>
          </div>
          <div class="edit-profile-container" v-if="!isViewOnly">
              <img src="/svg/icons/search-copy-30.svg"/>
              <span>Edit Interests</span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'employee-card',
  props: {
    user: Object,
    isViewOnly: {
        type: Boolean,
        default: false
    }
  }
}
</script>
<style lang="scss">
    .employee-card-view {
        background: white;

        .large-avatar {
            width: 100px;
            height: 100px;
        }
    }

    .employee-card {
        width: 490px;
        box-shadow: 0 2px 10px 0 #7f7f7f;
    }

    .edit-profile-container img {
        margin: 0 0 0 170px;
    }

    .edit-profile-container span {
        margin: 0 0 0 5px;
        color: #00a6ce;
        font-size: 14px;
        font-weight: bold;
        font-family: "Open Sans";
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
    }

    .profile-info-container {
        width: 100%;
        padding: 4px 24px 4px 24px;
    }

    .profile-info {
        color: #48DBFF !important;
        border-right: 1px solid #48DBFF;
        padding: 0 5px 0 5px;
    }

    .dropdown-item {
        // Shpakla flag!
        pointer-events: none;
        // end shpakla flag
        padding: 2px 0 2px 0;
    }

    .dropdown-item:first-child{
        width: 190px;
        font-family: "proxima-nova";
        font-size: 16px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.6px;
        color: #3d3d3d;
        float: left;
        text-transform: uppercase;
    }

    .dropdown-item:nth-child(3) {
        color: #00a6ce;
    }

    .user-info {
        margin-top: 20px;
    }

    .position-container span {
        border-left: 1px solid black;
        padding: 0px 7px 0px 7px;
        text-decoration: underline;
        font-size: 14px;
    }

    .position-container span:nth-child(1) {
        border-left: none !important;
        padding-left: 0 !important;
    }

    .dropdown-item:nth-child(4), .dropdown-item:nth-child(5), .dropdown-item:nth-child(6) {
        font-size: 14px;
    }

    .log-out-button {
        padding: 2px 12px 2px 0px;
        float: right;
        font-family: "open-sans";
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #00a6ce;
    }

    .interests-list {
        margin: 5px 5px 5px 5px;
        float: left;
        min-width: 10%;
        padding: 0 5px 0 5px;
        border-radius: 4px;
        border: solid 2px #48dbff;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: center;
        color: #545454;
    }

    .interests-container {
        margin: 0 0% 0 5%;
        padding: 0 0 20px 0;
        width: 70%;
        border-bottom: solid 1px #dbf8ff;
    }

    .triangle {
        width: 0;
        height: 0;
        margin-left: 410px;
        margin-top: -6px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid white;
        background-color: transparent !important;
    }

    .dropdown-menu {
        padding: 0 0 0 0 !important;
        margin: 18px 0 0 0 !important;
        border-radius: 7px;
    }

    .large-avatar {
        vertical-align: middle;
        width: 111px;
        height: 111px;
        border-radius: 50%;
        margin: 10%;
    }

    .edit-profile-container {
        margin: 0 0% 0 5%;
        padding: 0 0 0 0;
        width: 70%;
    }

    .edit-profile-container {
        padding: 5px 0 5px 0;
    }
</style>
