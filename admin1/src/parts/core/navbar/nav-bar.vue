<template>
    <!-- Custom div container for nav bar -->
    <div class="navbar-container">
        <!-- Bootstrap's navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- Company Logo -->
            <a class="navbar-brand" href="/">
                <img src="https://itarena.ua/wp-content/uploads/2015/06/softserve_logo_new-1024x308.png" width="200" height="60" alt="">
            </a>
            <!-- end of Company Logo -->
            <!-- Search filters dropdown -->
            <xselect name=filter v-model=frm.filter :data="filter" v-if="isAuth" class="dropdown-nav" />
            <!-- end of Search filters dropdown -->
            <!-- Search input -->
            <xauto name=search v-model=frm.search :selection=frm.filter :data="data" v-if="isAuth" />
            <!--end of Search input -->
            <!-- Avatar with drop down card -->
            <!-- Profile -->
            <xprofile name=profile v-if="isAuth" :user="user" />
            <!-- End of Profile -->
        </nav>
        <!-- end of Bootstrap navbar -->
    </div>
    <!-- end of Custom div container for nav bar -->

</template>

<script>
    import xprofile from './xprofile.vue';
    export default {
        name: 'NavBar',
        title: 'NavBar',
        path: '/navbar',

        components: { xprofile },

        props: {
            user: Object,
            isAuth: Boolean
        },

        data() {
            return {
                frm: {},
                filter: [{value: 'Name', label: 'Name', selected: true}, {value: 'Interest', label: 'Interest'}],
                data: [{id: 'au', text: 'Australia'}, {id: 'at', text: 'Austria'}, {id: 'br', text: 'Brasil'}],
            }
        },
        mounted() {

        }
    }
</script>

<style scopped>

    .navbar-container {
        float: none !important;
    }

    .choices__item--choice:hover {
        border-left: 3px solid #00a6ce;
        background-color: white !important;
    }

    .choices__item--choice {
        border-bottom: 1px solid rgb(207, 207, 207);
    }

    .choices__list--dropdown .choices__item--selectable {
        padding-right: 0 !important;
    }

    .choices__item :checked {
        color: #00a6ce;
    }

    .choices__list--single {
        padding-left: 10px;
    }

    .is-highlighted {
        color: #00a6ce !important;
        background-color: white !important;
    }

    .choices {
        color: black;
    }

    .choices__inner {
        background: transparent;
        border-top: transparent !important;
        border-left: transparent !important;
        border-right: 1px solid rgb(207, 207, 207) !important;
        border-bottom: transparent !important;
        font-weight: 200;
        color: white;
        padding: 12px 7.5px 12px 0 !important;
    }

    .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .search-icon {
        width: 24px;
        float: left;
        margin: 16px 5px 13px 5px;
    }

    .navbar #form-search {
        width: 90%;
        border: white;
        float: left;
    }

    .form-control {
        padding: 26px 18px 13px 18px;
    }

    .search-container {
        margin-bottom: 0;
        border-right: 1px solid rgb(207, 207, 207);
    }
    
    a.navbar-brand {
       padding: 0;
        margin-right: 0;
    }

    .navbar-brand img {
        height: 50px;
        width: 180px;
    }

    *:focus {
        outline: none;
    }

    .form-control:focus {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .navbar .search-container {
        width: 30%;
    }

    .bg-light {
        background-color: #ffffff !important;
    }

    .navbar-container {
        margin: 0 auto;
    }

    .navbar-container,
    .dropdown-menu {
        border: 0px outset rgb(173, 173, 173);
        float: left;
        box-shadow: 0 0 12px rgb(145, 145, 145);
    }

    .dropdown {
        position: absolute;
        right: 30px;
        width: 10%;
        margin-right: 5%;
    }

    .dropdown-menu {
        max-width: 492px;
        left: -360px;
    }

    .navbar-brand {
        border-right: 1px solid rgb(207, 207, 207);
    }

    .navbar {
        padding: 0 !important;
        margin: 0 !important;
    }

 .input-group {
        max-width: 150px;
    }
    /* Search field */

   

    .search-input-group {
        max-width: 350px;
    }

    .search-container {
        text-align: center;
        min-width: 400px;
        padding-right: 14px;
        border-right: 1px solid rgb(207, 207, 207);
        margin: 0;
    }

    #custom-search-input {
        margin: 0;
        margin-top: auto;
        padding: 0;
    }

    #custom-search-input .search-query {
        width: 100%;
        padding-right: 3px;
        padding-left: 15px;
        margin-bottom: 0;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 0;
        border: none
    }

    #custom-search-input button {
        border: 0;
        background: none;
        padding: 2px 5px;
        margin-top: 2px;
        right: 5px;
        margin-bottom: 0;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        color: rgb(0, 0, 0);
        cursor: unset;
        z-index: 2;
    }

    input::-webkit-input-placeholder {
        font-size: 14px;
        line-height: 3;
    }

    .choices {
        margin: 0 0 0 0 !important;
    }

    .choices__item {
        color: black;
    }

    .dropdown-nav {
        width: 120px !important;
    }

</style>