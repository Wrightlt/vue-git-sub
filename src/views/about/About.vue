<template>
  <div class="about">
    <CommonNotice></CommonNotice>
    <h1>This is an about page</h1>
    <p class="version">V 0.0.1</p>
  </div>
</template>

<script>
import CommonNotice from '@/common/Notice'
export default {
  name: 'About',
  components: {
    CommonNotice
  }
}
</script>

<style scoped>
  .version {
    font-size: 20px;
    font-weight: 600;
  }
</style>