<!-- 投票多选 -->
<template>
  <div class="vote-multiple">
    <div class="vote-number">总票数: {{ allTicket }}</div>
    <div class="vote-grid">
      <template v-for="(item, index) in list">
        <div class="vote-grid-item" :key="index">
          <div class="vote-card">
            <div class="vote-name">{{ item.option }}</div>
            <van-image style="min-height: 5rem" :src="item.img" />
            <div class="vote-content">
              <span class="vote-tickets">{{ item.voteNum }}票</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowImg',
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
.vote-number {
  text-align: right;
  padding: 5px 20px 5px 0px;
  font-size: 0.8rem;
}
.vote-grid {
  display: flex;
  flex-wrap: wrap;
  max-height: calc(100vh - 107px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.vote-grid-item {
  width: 33.333%;
  background-color: #ffffff;
  box-sizing: border-box;
}
.vote-card {
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
}
.vote-content {
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
  align-items: center;
}
.vote-name {
  padding: 5px 10px;
}
.vote-name,
.vote-tickets {
  font-size: 0.8rem;
  text-align: center;
}
</style>
