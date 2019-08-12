<!-- 抽奖倒计时组件 -->
<template>
  <div class="time-count-down">
    <div class="count-circle">
      <div class="circle-bg"></div>
      <van-count-down class="timing" ref="countDown" :time="date * 1000" :auto-start="false" @finish="finished">
        <template v-slot="timeData">
          <van-circle
            v-model="now"
            size="80px"
            :rate="Math.floor(((timeData.seconds * 100) / date).toFixed(0))"
            :stroke-width="70"
            :color="color"
            layer-color="#eee"
            fill="#ffffff"
            :text="timeData.seconds + ''"
          />
        </template>
      </van-count-down>
    </div>
  </div>
</template>
<script>
let defaultColor = '#ffa726'
let errorColor = '#f44'
export default {
  name: 'SingleCountDown',
  data() {
    return {
      now: 0,
      color: defaultColor,
      number: 0
    }
  },
  watch: {
    now(val) {
      if (val <= 20) {
        this.color = errorColor
      } else {
        this.color = defaultColor
      }
    }
  },
  props: {
    time: {
      type: Number,
      default: 30
    }
  },
  computed: {},
  mounted() {
    this.number = this.max
  },
  methods: {
    start() {
      this.$refs.countDown.start()
    },
    pause() {
      this.$refs.countDown.pause()
    },
    reset() {
      this.$refs.countDown.reset()
    },
    finished() {
      this.$toast('倒计时结束')
    }
  }
}
</script>
<style>
.count-title {
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: white;
}
.count-circle {
  display: flex;
  position: absolute;
  width: 100vw;
  top: 50px;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle-bg {
  box-shadow: 0px 0px 3px 0px #3f3f3f;
  top: -5px;
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  border: 5px #fff solid;
  background-color: #fff;
}
.timing .van-circle__text {
  font-size: 24px;
  font-weight: 600;
}
</style>
