<template>
  <div class="error">
    <div class="error-info">
      <img class="error-icon" src="../../assets/warning.png" width="60px" />
      <div class="error-text">抱歉,你访问的链接不存在</div>
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
  padding: 2px 5px;
  margin-left: 20px;
}
</style>
