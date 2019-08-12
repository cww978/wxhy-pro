<template>
  <div class="questions">
    <all-count-down :time="timeDown" ref="timing"></all-count-down>
    <div class="question-main">
      <div class="question-card">
        <div class="question-header">
          <div class="question-number">第1/10题</div>
        </div>
        <p class="question-content">
          老年人和儿童在应用抗菌药时,最安全的品种是
        </p>
        <div class="question-option">
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
import AllCountDown from '../components/tool/AllCountDown'
export default {
  name: 'Questions',
  components: { AllCountDown },
  data() {
    return {
      timeDown: 15
    }
  },
  mounted() {
    // this.$refs.timing.start()
  }
}
</script>
<style scoped>
.questions {
  background-color: #f44336;
}
.question-main {
  position: absolute;
  width: 100vw;
  top: 75px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
}
.question-card {
  height: 100%;
  margin: 10px 20px;
  border-radius: 10px;
  background-color: #fff0e7;
}
.question-header {
  height: 40px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.question-content {
  padding: 0px 10px;
}
.question-option {
  display: flex;
  flex-direction: column;
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
</style>
