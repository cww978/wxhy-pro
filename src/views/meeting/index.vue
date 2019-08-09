<template>
  <keep-alive include="Home">
    <router-view class="app-meeting" />
  </keep-alive>
</template>
<script>
export default {
  name: 'Meeting',
  computed: {
    meetingId() {
      return this.$store.getters['meeting/meetingId']
    }
  },
  mounted() {
    // 设置会议ID
    this.$store.dispatch('meeting/setMeetingInfo', { meetingId: 12 })
    // 获取人员信息
    this.$store.dispatch('user/getUserInfo').then(() => {
      // 刷新签到信息
      this.$store.dispatch('user/updateSigninInfo', this.meetingId)
    })
  }
}
</script>
<style scoped>
.app-meeting {
  height: 100vh;
  width: 100vw;
  background-color: #f7f7f7;
}
</style>
