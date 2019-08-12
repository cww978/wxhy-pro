<template>
  <div>
    <div class="title">请在规定时间完成所有答题</div>
    <van-count-down :time="time * 1000" format="mm:ss" />
  </div>
</template>
<script>
export default {
  name: 'AllCountDown',
  data() {
    return {}
  },
  props: {
    time: {
      type: Number,
      default: 30
    }
  }
}
</script>
<style scoped>
.title {
  color: white;
  padding: 10px 15px 5px 15px;
}
.van-count-down {
  text-align: center;
  color: white;
  font-size: 30px;
  height: 40px;
  line-height: 40px;
}
</style>
