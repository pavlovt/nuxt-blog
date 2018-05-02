<template>
  <div class="login">
    <h1>Login page</h1>
    {{frm}}
    <form class="col-4 offset-4" @submit.prevent="submit">
      <xinput name="username" label="Username" v-model="frm.username" zzz />
      <xinput name="password" label="Password" type="password" v-model="frm.password" />
      <xaction>Submit</xaction>
    </form>
  </div>
</template>

<script>
  import _ from 'lodash';
  // import iView from 'iview';
  import xinput from '~app/comps/form/xinput'
  import xaction from '~app/comps/form/xaction'
  
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
        // api.get('/posts')
      }
    },
    mounted() {
    },
  };
</script>

<style lang="scss">
  .login {
    margin-top: 15%;
  }
</style>