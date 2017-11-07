<template>
    <div class="son-box">
      <!-- 面包屑区域 -->
      <div class="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb-item href="/">后台管理</Breadcrumb-item>
          <Breadcrumb-item>总览</Breadcrumb-item>
        </Breadcrumb>
      </div>

      <!-- 数据概览区域 -->
      <div class="overview">
        <Row :gutter="16">
          <i-col span="6">
            <div class="overview-son">
              <div class="overview-son-top">
                <img src="../../../assets/imgs/icon_devices.png" alt="">
                <span>50</span>
              </div>
              <div class="overview-son-bottom">
                <span>设备总是</span>
                <span>截止到 20:20</span>
              </div>
            </div>
          </i-col>
          <i-col span="6">
            <div class="overview-son">
              <div class="overview-son-top">
                <img src="../../../assets/imgs/icon_appusers.png" alt="">
                <span>2000</span>
              </div>
              <div class="overview-son-bottom">
                <span>APP用户总数</span>
                <span>截止到 20:20</span>
              </div>
            </div>
          </i-col>
          <i-col span="6">
            <div class="overview-son">
              <div class="overview-son-top">
                <img src="../../../assets/imgs/icon_booking.png" alt="">
                <span>3323</span>
              </div>
              <div class="overview-son-bottom">
                <span>成交订单数</span>
                <span>截止到 20:20</span>
              </div>
            </div>
          </i-col>
          <i-col span="6">
            <div class="overview-son">
              <div class="overview-son-top">
                <img src="../../../assets/imgs/icon_allincome.png" alt="">
                <span>6888</span>
              </div>
              <div class="overview-son-bottom">
                <span>总收入</span>
                <span>截止到 20:20</span>
              </div>
            </div>
          </i-col>
        </Row>
      </div>

      <!-- 视图区域 -->
      <div class="attempt">
        <h1>我是内容</h1>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  /* 内容区域 */
  .son-box{
    padding-left:20px;
    /* 数据概览区域 */
    .overview{
      max-width: 1220px;
      .ivu-row{
        .ivu-col{
          padding-right: 18px !important;
          .overview-son{
            box-sizing: border-box;
            height: 120px;
            background-color: #fff;
            border-radius: 5px;
            padding: 30px 16px;
            box-shadow: 0 3px 4px 2px #ccc;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            min-width: 200px;
            .overview-son-top{
              display: flex;
              justify-content: space-between;
              height: 52px;
              img{
                width: 40px;
                height: 52px;
              }
              span{
                font-size: 52px;
                line-height: 52px;
                color: #42C3EE;
              }
            }
            .overview-son-bottom{
              display: flex;
              justify-content: space-between;
              height: 24px;
              line-height: 24px;
              margin-top: 8px;
              span{
                color: #B6B7BC;
                font-size: 16px;
                &:nth-child(2){
                  font-size: 14px;
                }
              }
            }
          }
        }
      }

    }

    /* 数据视图区域 */
    .attempt{
      width: 1220px;
      height: 525px;
      margin-top: 30px;
      background: #fff;
    }
  }


</style>
