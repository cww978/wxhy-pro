<template>
  <div class="home">
    <h2 class="block-title">请选择</h2>
    <van-grid :gutter="10" :column-num="3">
      <template v-for="(item, index) in menus">
        <van-grid-item :key="index" icon="photo-o" @click="navTo(item.path)" :text="item.title" />
      </template>
    </van-grid>
    <sign :show="!isSignin"></sign>
  </div>
</template>
<script>
import Sign from '../components/Sign'
export default {
  name: 'Home',
  components: { Sign },
  data() {
    return {
      value: '23'
    }
  },
  computed: {
    isSignin() {
      return this.$store.getters['user/signin']
    },
    menus() {
      return this.$store.getters['user/menus']
    }
  },
  mounted() {
    this.$store.dispatch('user/getMenus')
  },
  methods: {
    navTo(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
<style scoped>
.home {
  width: 100vw;
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
