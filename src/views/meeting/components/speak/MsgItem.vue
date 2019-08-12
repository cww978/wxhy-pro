<template>
  <div class="msg">
    <div class="msg-header">
      <div class="mes-time">{{ time }}</div>
      <div class="mes-state" v-if="enable == 1"><van-tag>被屏蔽</van-tag></div>
    </div>
    <div class="msg-content">
      <p v-if="type == 0">
        {{ content }}
      </p>
      <van-image width="150" height="100" v-else :src="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MsgItem',
  props: ['time', 'type', 'enable', 'content']
}
</script>
<style scoped>
.msg {
  border-bottom: 0.5px #ddd solid;
}
.msg-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
}
.mes-time {
  color: gray;
  font-size: 0.8rem;
}
.msg-content {
  padding: 0px 10px;
}
</style>
