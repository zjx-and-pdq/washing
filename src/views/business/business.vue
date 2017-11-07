<template>
  <div class="box">
    <div class="sidebar">
      <Menu @on-select="routeTo" active-name="1">
        <Menu-item name="1">
          业务参数管理
        </Menu-item>
        <Menu-item name="2">
          业务查询
        </Menu-item>
        <Menu-item name="3">
          订单管理
        </Menu-item>
        <Menu-item name="4">
          优惠券管理
        </Menu-item>
        <Menu-item name="5">
          财务扎帐
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
