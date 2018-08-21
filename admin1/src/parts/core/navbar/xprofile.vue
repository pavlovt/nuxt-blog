<template>

    <div class="dropdown">
        <a data-toggle="dropdown">
            <img :src="user.imageUrl" alt="Avatar" class="avatar">
            <a href=""></a>
            <span class="navbar-text"><b>{{ user.displayName }}</b></span>
        </a>
        <employee-card :user="user" :isViewOnly="isViewOnly"></employee-card>
    </div>
</template>
<script>
    import { observer } from 'mobx-vue'
    import employeeCard from './employee-card.vue'

    export default observer({
        name: 'xprofile',
        props: {
            user: Object,
            isViewOnly: {
                type: Boolean,
                default: false
            }
        },
        components: { employeeCard },
        data() {
            return {
                el : {},
                
            }
        },
        methods: {
        },
        mounted() {
        },
        computed: {
        },
    })
</script>

<style scoped lang="scss">

    .dropdown {
        cursor: pointer;
    }

    .navbar-text {
        font-family: "Open Sans";
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
    }

    .avatar {
        margin-right: 5%;
        width: 30px;
        height: 30px;
    }

</style>
