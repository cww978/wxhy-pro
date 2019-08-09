<!-- 投票多选 -->
<template>
  <div class="vote-multiple">
    <div v-if="!single" :class="[voteError == false ? 'success' : 'error', 'vote-number']">投票: {{ number }}/{{ max }}</div>
    <div class="vote-grid">
      <template v-for="(item, index) in list">
        <div class="vote-grid-item" :key="index">
          <div class="vote-card">
            <div class="vote-name">{{ item.option }}</div>
            <van-image style="min-height: 5rem" :src="item.img" />
            <div class="vote-content">
              <van-radio-group v-if="single" v-model="votingResult">
                <van-radio :name="item.num"></van-radio>
              </van-radio-group>
              <van-checkbox-group v-else v-model="votingResults">
                <van-checkbox :name="item.num"></van-checkbox>
              </van-checkbox-group>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VoteImg',
  data() {
    return {
      votingResult: '',
      votingResults: []
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
  height: 48px;
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
.vote-img {
  width: 100%;
}
.vote-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
  align-items: center;
}

.vote-name {
  padding: 5px 10px;
  font-size: 0.8rem;
  text-align: center;
}
</style>
