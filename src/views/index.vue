<template>
    <div class="box">
      <!-- logo区域 -->
      <div class="top-box">
        <div class="top-son-box">
          <div class="logo"><img src="../assets/imgs/logo.png" alt=""></div>
          <div class="top-right">
            <span><Icon type="navicon"></Icon></span>
            <span><Icon type="ios-email-outline"></Icon></span>
            <span><Icon type="android-notifications-none"></Icon></span>
            <span><img src="../assets/imgs/icon_touxiang.png" alt=""></span>
            <span>管理员123</span>
          </div>
        </div>
      </div>
      <!-- 主导航区域 -->
      <div class="nav">
        <Menu mode="horizontal" @on-select="routeTo" active-name="/">
          <Menu-item name="/">
            <i class="iconfont icon-shoujicaidanshezhi"></i>
            后台管理
          </Menu-item>
          <Menu-item name="/business">
            <i class="iconfont icon-yewu"></i>
            业务管理
          </Menu-item>
          <Menu-item name="/client">
            <i class="iconfont icon-shouji"></i>
            客户管理
          </Menu-item>
          <Menu-item name="/jurisdiction">
            <i class="iconfont icon-quanxian"></i>
            权限管理
          </Menu-item>
          <Menu-item name="/user">
            <i class="iconfont icon-yonghu"></i>
            我的中心
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
      return {

      }
    },
    computed:{

    },
    methods: {
      routeTo(link) {
        this.$router.push(link);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/font-icon/iconfont.css";

  .box{
    height: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }
  /* logo 区域*/
  .top-box{
    background: #fff;
    overflow: hidden;
    .top-son-box{
      display: flex;
      justify-content: space-between;
      background: #fff;
      overflow: hidden;
      .top-right{
        float: right;
        margin-right: 15px;
        span{
          display: inline-block;
          font-size: 20px;
          color: #646467;
          line-height: 70px;
          margin-right: 24px;
          &:nth-child(1){
            font-size: 22px;
          }
          &:nth-child(3){
            margin-right: 20px;
          }
          &:nth-child(4){
            width: 48px;
            height: 48px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 11px;
            margin-bottom: 11px;
            img{
              width: 100%;
            }
          }
          &:nth-child(5){
            font-size: 12px;
          }
        }

      }
    }
  }

  /* 主导航区域 */
  .nav{
    height: 64px;
    padding-left: 170px;
    background: #E2F5FF;
    .ivu-menu-light{
      height: 64px;
      max-width: 1200px;
      background: #E2F5FF;
      .ivu-menu-item{
        width: 20%;
        color: #646447;
        font-size: 16px;
        overflow: hidden; /* 文字超出隐藏 */
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height: 60px;
        text-align: center;
        border-top: 4px solid transparent;
        border-bottom: 2px solid #42C3EE;
        cursor:pointer;
        &.ivu-menu-item-active.ivu-menu-item-selected{
          background: #fff;
          color: #001B42;
          font-weight: 600;
          border-bottom: none;
          border-top: 4px solid #42C3EE;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        i{
          font-size: 34px;
          line-height: 60px;
          vertical-align: middle;
          margin-right: 0;
        }
      }
    }

  }

  /* 内容区域 */
  .content{
    width: 100%;
    height: 100%;
  }

</style>
