<template>
  <div class="error">
    <div class="error-info">
      <img class="error-icon" src="../../assets/error.png" width="60px" />
      <div class="error-text">抱歉,系统出现错误</div>
    </div>
    <div>
      <router-link is="van-button" to="/meeting/home" type="info" replace>返回首页</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error400'
}
</script>
<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 150px;
}
.error-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
}
.error-text {
  color: #2196f3;
  margin-left: 20px;
  padding: 2px 5px;
}
</style>
