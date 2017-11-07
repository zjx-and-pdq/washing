<template>
  <div class="box">
    <div class="sidebar">
      <Menu @on-select="routeTo">
        <Menu-item name="1">
          用户基本信息
        </Menu-item>
        <Menu-item name="2">
          用户消费记录
        </Menu-item>
        <Menu-item name="3">
          用户奖励记录
        </Menu-item>
        <Menu-item name="4">
          用户租赁记录
        </Menu-item>
        <Menu-item name="5">
          邀请分享链接
        </Menu-item>
      </Menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      routeTo(link) {
        this.$router.push(link);
      }
    }
  }
</script>

<style scoped lang="scss">
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .sidebar{
      width: 170px;
      background-color: #fff;
    }
    .content{
      width: 100%;
      height: 100%;
    }
  }

</style>
