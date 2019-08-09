<template>
  <div class="questions">
    <div class="count-down">
      <div class="circle-bg"></div>
      <timing :date="timeDown" ref="timing"></timing>
    </div>
    <div class="question-main">
      <div class="question-card">
        <div class="question-header">
          题目
        </div>
        <div class="question-content">
          <div class="question-group">
            <div class="question-cell">答案1</div>
            <div class="question-cell">答案2</div>
            <div class="question-cell">答案3</div>
            <div class="question-cell">答案4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Timing from '../components/tool/Timing'
export default {
  name: 'Questions',
  components: { Timing },
  data() {
    return {
      timeDown: 15
    }
  },
  mounted() {
    this.$refs.timing.start()
  }
}
</script>
<style scoped>
.questions {
  background-color: #f44336;
}
.count-down {
  display: flex;
  position: absolute;
  width: 100vw;
  top: 30px;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle-bg {
  box-shadow: 0px 0px 5px 0px #3f3f3f;
  top: -5px;
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  border: 5px #fff solid;
  background-color: #fff;
}
.question-main {
  position: absolute;
  width: 100vw;
  top: 60px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
}
.question-card {
  padding-top: 70px;
  height: 100%;
  box-shadow: 0px 2px 10px 0px #3f3f3f;
  margin: 10px 20px;
  border-radius: 10px;
  background-color: #fff0e7;
}
.question-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.question-group {
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
}
.question-cell {
  height: 50px;
  margin: 10px 0px;
  line-height: 50px;
  padding: 0px 20px;
  border-radius: 5px;
  background-color: #ffffff;
}
.question-cell:active {
  background-color: #f0f0f0;
}
.question-content {
  display: flex;
  flex-direction: column;
}
</style>
