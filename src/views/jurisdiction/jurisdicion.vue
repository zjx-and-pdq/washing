<template>
  <div class="box">
    <div class="sidebar">
      <Menu @on-select="routeTo">
        <Menu-item name="1">
          角色管理
        </Menu-item>
        <Menu-item name="2">
          角色权限管理
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
