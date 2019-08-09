<template>
  <div>
    <div class="prize" v-for="(item, index) in list" :key="index">
      <div class="prize-img">
        <van-image width="60" height="60" :src="item.img" />
      </div>
      <div class="prize-content">
        <div class="prize-title">{{ item.title }}</div>
        <div class="prize-desc">{{ item.desc }}</div>
      </div>
      <div class="prize-num">数量：{{ item.num }}</div>
    </div>
  </div>
</template>
<script>
import { getPrize } from '@/api/meeting'
export default {
  name: 'MyPrize',
  data() {
    return {
      list: [
        { title: '奖品名称', num: 99, desc: '描述...', img: 'https://img.yzcdn.cn/vant/t-thirt.jpg' },
        { title: '奖品名称', num: 99, desc: '描述...', img: 'https://img.yzcdn.cn/vant/cat.jpeg' }
      ]
    }
  },
  mounted() {
    getPrize().then()
  }
}
</script>
<style scoped>
.prize {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #ffffff;
  border-bottom: #f0f0f0 1px solid;
}
.prize-img {
  margin-right: 10px;
}
.prize-content {
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex: 1;
}
.prize-title {
  padding: 3px 0px;
}
.prize-desc {
  color: #7d7e80;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.prize-num {
  width: 80px;
  text-align: right;
  font-size: 0.8rem;
  color: #7d7e80;
}
</style>
