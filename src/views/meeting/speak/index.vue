<template>
  <div class="speak">
    <h2 class="block-title">请发言</h2>
    <van-cell-group>
      <van-field
        :autosize="{ maxHeight: 150, minHeight: 100 }"
        v-model="params.msg"
        type="textarea"
        placeholder="..."
      />
    </van-cell-group>
    <div class="speak-submit">
      <van-button @click="showMsg" plain type="info">查看发言记录</van-button>
      <van-button @click="send" :disabled="params.msg == '' ? true : false" type="primary">确定</van-button>
    </div>
    <meetting-msg-dialog :show="msgShow" @click-right="closeMsg"></meetting-msg-dialog>
  </div>
</template>
<script>
import { saveMeetingMsg } from '@/api/meetingMsg'
import MeettingMsgDialog from '../components/speak/MeettingMsgDialog'
export default {
  name: 'Speak',
  components: { MeettingMsgDialog },
  data() {
    return {
      params: {
        msg: '',
        type: 0,
        meetingId: ''
      },
      msgShow: false
    }
  },
  mounted() {
    console.log(this.msgShow)
  },
  computed: {
    meetingId() {
      return this.$store.getters['meeting/meetingId']
    }
  },
  methods: {
    closeMsg() {
      this.msgShow = false
    },
    send() {
      this.params.meetingId = this.meetingId
      saveMeetingMsg(this.params).then(res => {
        if (res.data) {
          this.$notify({ duration: 1500, message: '成功发言', background: '#07c160' })
        }
      })
    },
    showMsg() {
      this.msgShow = true
    }
  }
}
</script>
<style scoped>
.speak {
  display: flex;
  flex-direction: column;
}
.speak-submit {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
}
.block-title:first-of-type {
  padding-top: 20px;
}
.block-title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
  padding: 35px 15px 15px;
}
</style>
