<template>
  <div id="app" v-wechat-title="$route.meta.title">
    <router-view />
  </div>
</template>

<style>
/* 初始化样式 */
a,
div,
span {
  font-size: 16px;
  margin: 0px;
}
* {
  font-family: STXihei, '华文细黑', 'Microsoft YaHei', '微软雅黑';
}
</style>
