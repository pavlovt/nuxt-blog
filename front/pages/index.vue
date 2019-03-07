<template>
    <h1>Index2</h1>
</template>

<script>
import chromelogger from 'chromelogger';
  export default {
    asyncData: ({ req, res, log, warn }) => {
        var z = [1,2,3]
        log('qqq!', z);
        warn('an error occured');
        console.log('aaaaa');
        return {};
    }
  }
</script> 