<template>
  <div class="box">
    <div class="sidebar">
      <Menu @on-select="routeTo">
        <Menu-item name="1">
          个人资料维护
        </Menu-item>
        <Menu-item name="2">
          密码修改
        </Menu-item>
        <Menu-item name="3">
          修改 Emall
        </Menu-item>
        <Menu-item name="4">
          消息中心
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
