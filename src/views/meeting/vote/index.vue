<template>
  <div>
    <van-cell-group title="分组1">
      <template v-for="(item, index) in list">
        <van-cell :key="index" :value="item.title" is-link @click="navTo(item.id)"></van-cell>
      </template>
    </van-cell-group>
  </div>
</template>
<script>
// import { getActVoteList } from '@/api/meeting'
export default {
  name: 'Vote',
  data() {
    return {
      list: [{ id: 1, title: '投票' }]
    }
  },
  computed: {
    meetingId() {
      return this.$store.getters['meeting/meetingId']
    }
  },
  mounted() {
    // getActVoteList({ meetingId: this.meetingId }).then(res => {
    //   this.list = res.data
    //   this.list = [{ id: 1, title: '投票' }]
    // })
  },
  methods: {
    navTo(id) {
      this.$router.replace({
        path: '/meeting/vote/detail',
        query: { voteId: id }
      })
    }
  }
}
</script>
