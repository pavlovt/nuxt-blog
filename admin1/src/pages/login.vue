<template lang="ehtml">
  .login {
    h1.text-center { 'Login page' }
    // login form
    form.col-4.offset-4 @submit.prevent=submit {
      xinput  name=username label=Username v-model=frm.username v-validate='required' {}
      span.help.is-danger v-show=errors.has('username') { '{{ errors.first(\'username\') }}' }

      xinput name=password label=Password type=password v-model=frm.password v-validate='required' {}

      xaction  { 'Submit' }
    }
  }
</template>

<script>
  import _ from 'lodash';
  // import iView from 'iview';
  import xinput from '../el/form/xinput'
  import xaction from '../el/form/xaction'
  
  export default {
    name: 'login',
    metaInfo: {
      title: 'Login'
    },
    components: {
      // ..._.omit(iView, ['i18n', 'install', 'lang', 'locale', 'version', 'Circle', 'Switch'])
      xinput, xaction,
    },
    data() {
      return {
        frm: { username: '', password: ''},
      };
    },
    methods: {
      submit() {
        console.log('zzz')
        // api.get('/posts')
      }
    },
    beforeCreate() {

    },
    mounted() {
    },
  };
</script>

<style lang="scss">
  .login {
    margin-top: 15%;
    text-align: left;
  }
</style>