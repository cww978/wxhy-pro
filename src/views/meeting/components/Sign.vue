<template>
  <van-dialog v-model="showDialog" :lock-scroll="false" @confirm="sign" :show-confirm-button="false">
    <div class="sign-header">
      <van-image round width="5rem" height="5rem" :src="userHeadImgUrl" />
    </div>
    <!-- 输入个人资料 -->
    <!-- <van-cell-group>
      <van-field v-model="name" placeholder="姓名" />
      <van-field v-model="deptName" placeholder="部门" />
    </van-cell-group> -->
    <van-button :loading="signing" loading-text="签到中..." size="large" @click="sign" :disabled="!signButton" plain type="primary">立即签到</van-button>
  </van-dialog>
</template>
<script>
import Location from '@/utils/location'
export default {
  name: 'Sign',
  data() {
    return {
      showDialog: false,
      signButton: true,
      signing: false,
      name: '',
      deptName: '',
      params: {
        id: '',
        // 会议Id扫码获取
        meetingId: '',
        // 经度
        longitude: '',
        // 纬度
        latitude: '',
        // 姓名
        name: '',
        // 部门
        deptName: ''
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean
    }
  },
  watch: {
    name(val) {
      if (val == '' || this.deptName == '') {
        this.signButton = false
      } else {
        this.signButton = true
      }
    },
    deptName(val) {
      if (val == '' || this.name == '') {
        this.signButton = false
      } else {
        this.signButton = true
      }
    }
  },
  computed: {
    userHeadImgUrl() {
      return this.$store.getters['user/userHeadImgUrl']
    },
    confirmColor() {
      return this.signButton ? '#1989fa' : '#ddd'
    },
    meetingId() {
      return this.$store.getters['meeting/meetingId']
    }
  },
  mounted() {
    this.showDialog = this.show
    // 获取坐标
    Location.getLocation().then(res => {
      console.log('signin', res)
      this.params.longitude = res.result.location.lng
      this.params.latitude = res.result.location.lat
      this.locationText = res.result.formatted_address
    })
  },
  methods: {
    sign() {
      this.signing = true
      this.signButton = false
      this.params.name = this.name
      this.params.deptName = this.deptName
      this.params.meetingId = this.meetingId
      this.$store
        .dispatch('user/signin', this.params)
        .then(() => {
          this.name = ''
          this.deptName = ''
          this.signing = false
          this.showDialog = false
          this.$toast.success('签到成功')
        })
        .catch(() => {
          this.showDialog = false
          this.signButton = true
          this.signing = false
        })
    }
  }
}
</script>
<style scoped>
.sign-header {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
}
</style>
