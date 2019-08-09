<template>
  <div class="votes">
    <div class="vote-header">
      <span class="vote-title">{{ title }}</span>
    </div>
    <vote-img :single="true" :list="list" :min="minNum" :max="maxNum" v-model="emptyVote"></vote-img>
    <show-img :list="list"></show-img>
    <vote-no-img :single="false" :list="list" :min="minNum" :max="maxNum" v-model="emptyVote"></vote-no-img>
    <show-no-img :list="list"></show-no-img>
    <div class="footer">
      <van-button v-if="voteState == 1" disabled type="primary">已投票</van-button>
      <van-button v-else-if="voteState == 2" :disabled="!voteButtonSwitch" @click="sendVote" type="primary">确定投票</van-button>
      <van-button v-else disabled type="primary">投票结束</van-button>
    </div>
  </div>
</template>
<script>
import VoteNoImg from '../components/vote/VoteNoImg'
import VoteImg from '../components/vote/VoteImg'
import ShowNoImg from '../components/vote/ShowNoImg'
import ShowImg from '../components/vote/ShowImg'
// import { getActVoteDetail, sendVote } from '@/api/meeting'
export default {
  name: 'VoteDetail',
  components: { ShowImg, VoteNoImg, ShowNoImg, VoteImg },
  data() {
    return {
      voteButtonSwitch: false,
      voteState: 2, // 目前的投票状态
      isSingle: 0, // 是否是单选
      title: '',
      hasImg: false,
      maxNum: 3,
      minNum: 1,
      emptyVote: null, // 临时选择结果
      params: {
        meetingId: '',
        voteId: '',
        votingResults: ''
      },
      list: [
        { option: 'wqe', voteNum: 453, num: 1, img: '' },
        { option: 'ds', voteNum: 89, num: 2, img: '' },
        { option: 'dq', voteNum: 13, num: 3, img: '' },
        { option: 'tg', voteNum: 23, num: 4, img: '' },
        { option: 'dwf', voteNum: 243, num: 5, img: '' },
        { option: 'vca', voteNum: 21, num: 6, img: '' }
      ]
    }
  },
  computed: {
    meetingId() {
      return this.$store.getters['meeting/meetingId']
    }
  },
  watch: {
    emptyVote(val) {
      if (val instanceof Array && this.isSingle == 0) {
        // 投票选项数必须在范围内
        if (val.length >= this.minNum && val.length <= this.maxNum) {
          this.voteButtonSwitch = true
        } else {
          this.voteButtonSwitch = false
        }
      } else if (this.isSingle == 1) {
        if (val.length > 0) {
          this.voteButtonSwitch = true
        } else {
          this.voteButtonSwitch = false
        }
      }
    }
  },
  mounted() {
    this.params.voteId = this.$route.query.voteId
    this.params.meetingId = this.meetingId
    // 获取投票详情
    // getActVoteDetail({ id: this.$route.query.id }).then(() => {
    //   this.minNum = res.data.minNum
    //   this.maxNum = res.data.maxNum
    //   this.isSingle = res.data.ifSingle
    //   this.title = res.data.title
    //   this.list = res.data.options
    // })
  },
  methods: {
    // 投票
    sendVote() {
      this.params.votingResults = this.emptyVote.join(',')
      console.log('vote', this.params.votingResults)
      // sendVote(this.params).then(res => {
      //   if (res.data) {
      //     this.voteState = 1
      //   }
      // })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.vote-header {
  padding: 5px 10px;
}
.vote-header .vote-title {
  font-size: 0.85rem;
}
.footer {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
