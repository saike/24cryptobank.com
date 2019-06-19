<template>
  <div class="index_page">
    <Exchange/>
  </div>
</template>

<script>

import Exchange from '~/components/Exchange.vue'

export default {
  components: {
    Exchange
  }
}
</script>

<style type="text/less" lang="less">

  @import (reference) "~assets/theme/helpers";
  @import (reference) "~assets/theme/colors";
  @import (reference) "~assets/theme/forms";

  .index_page {

    display: block;
    background-image: url(/backgrounds/home.jpg);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;

  }

</style>
