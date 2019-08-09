<template>
  <!-- 显示无图投票的结果 -->
  <div>
    <div class="vote-number">总票数: {{ allTicket }}</div>
    <van-cell-group>
      <van-cell v-for="(item, index) in list" :key="index" :value="item.voteNum">
        <template slot="title">
          <span class="custom-title">{{ item.option }}</span>
          <div class="chart-line" :style="`width:${(item.voteNum * 100) / allTicket}%`"></div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  name: 'ShowNoImg',
  data() {
    return {}
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    allTicket() {
      let num = 0
      for (let item of this.list) {
        num += item.voteNum
      }
      return num
    }
  }
}
</script>
<style scoped>
.chart-line {
  position: absolute;
  text-align: right;
  left: 0px;
  line-height: 44px;
  top: 0px;
  height: 44px;
  background-color: rgba(255, 111, 111, 0.5);
  transition: width 2s linear;
}
.vote-number {
  text-align: right;
  padding: 5px 20px 5px 0px;
  font-size: 0.8rem;
}
</style>
