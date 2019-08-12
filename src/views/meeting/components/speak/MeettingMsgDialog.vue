<template>
  <div class="msg-dialog" v-if="show">
    <van-nav-bar right-text="关闭" title="发言记录" @click-right="click" />
    <div class="msg-list">
      <p class="no-msg" v-if="msgList.length <= 0">暂无信息</p>
      <template v-for="(item, index) in msgList">
        <msg-item
          :key="index"
          :type="item.type"
          :time="item.addTime"
          :enable="item.ifEnable"
          :content="item.msg"
        ></msg-item>
      </template>
    </div>
  </div>
</template>
<script>
import MsgItem from './MsgItem'
import { getMeetingMsg } from '@/api/meetingMsg'
export default {
  name: 'MeettingMsgDialog',
  components: { MsgItem },
  data() {
    return {
      msgList: [
        { ifEnable: 1, type: 0, msg: '213', addTime: '2018-10-10' },
        { ifEnable: 0, type: 1, msg: 'https://img.yzcdn.cn/vant/cat.jpeg', addTime: '2018-10-10' }
      ]
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    meetingId() {
      return this.$store.getters['meeting/meetingId']
    }
  },
  watch: {
    show(val) {
      if (val) {
        getMeetingMsg({ meetingId: this.meetingId }).then(res => {
          this.msgList = res.data
        })
      }
    }
  },
  methods: {
    click() {
      this.$emit('click-right')
    }
  }
}
</script>
<style scoped>
.msg-dialog {
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
}
.msg-list {
  height: calc(100vh - 46px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.no-msg {
  color: #aeaeae;
  text-align: center;
}
</style>
