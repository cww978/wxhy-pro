<!-- 进行无图投票 -->
<template>
  <div class="vote-multiple">
    <!-- 多选投票时显示 -->
    <div v-if="single == false" :class="[voteError == false ? 'success' : 'error', 'vote-number']">投票: {{ number }}/{{ max }}</div>
    <!-- 多项投票 -->
    <van-checkbox-group v-if="single == false" v-model="votingResults">
      <van-cell-group>
        <template v-for="(item, index) in list">
          <van-cell clickable :key="index" :title="item.option" @click="toggle(index)">
            <van-checkbox :name="item.num" ref="checkboxes" slot="right-icon" />
          </van-cell>
        </template>
      </van-cell-group>
    </van-checkbox-group>
    <!-- 单项投票 -->
    <van-radio-group v-else v-model="votingResult">
      <van-cell-group>
        <template v-for="(item, index) in list">
          <van-cell :key="index" :title="item.option" clickable @click="votingResult = item.num">
            <van-radio slot="right-icon" :name="item.num" />
          </van-cell>
        </template>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>
<script>
export default {
  name: 'VoteMultiple',
  data() {
    return {
      votingResults: [],
      votingResult: ''
    }
  },
  props: {
    single: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default() {
        return []
      }
    },
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: 3
    },
    value: {
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
    },
    number() {
      return this.votingResults.length
    },
    voteError() {
      if (this.votingResults.length >= this.min && this.votingResults.length <= this.max) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    votingResults(val) {
      this.$emit('input', [...val])
    },
    votingResult(val) {
      let value = []
      value.push(val)
      this.$emit('input', value)
    }
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    },
    check() {
      if (this.number >= this.max) {
        return false
      }
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
}
.vote-number {
  text-align: right;
  padding: 5px 20px 5px 0px;
  font-size: 0.8rem;
}
.vote-number.error {
  color: red;
}
.vote-number.success {
  color: yellowgreen;
}
.vote-name,
.vote-tickets {
  font-size: 0.8rem;
  text-align: center;
}
</style>
