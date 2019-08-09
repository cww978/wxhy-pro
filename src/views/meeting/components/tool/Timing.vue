<!-- 抽奖倒计时组件 -->
<template>
  <van-count-down class="timing" ref="countDown" :time="date * 1000" :auto-start="false" @finish="finished">
    <template v-slot="timeData">
      <van-circle
        v-model="now"
        size="80px"
        :rate="Math.floor(((timeData.seconds * 100) / date).toFixed(0))"
        :stroke-width="70"
        :color="color"
        layer-color="#ddd"
        fill="#ffffff"
        :text="timeData.seconds + ''"
      />
    </template>
  </van-count-down>
</template>
<script>
let defaultColor = '#ffa726'
let errorColor = '#f44'
export default {
  name: 'Timing',
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
    date: {
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
.timing .van-circle__text {
  font-size: 24px;
  font-weight: 600;
}
</style>
