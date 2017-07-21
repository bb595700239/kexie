<template>
  <div class="warp page1-1">
    <header-guide :goBack="true" headTitle="所有学会">
    </header-guide>
    <div class="main-box scroll" style="height:calc(100vh - .86rem);">
      <scroller ref="my_scroller">
        <ul class="list">
          <li class="flex-box arr" v-for="(item,index) in list" :key="index">
            <div class="pic"><img src="" alt=""></div>
            <div class="info">
              <div class="d1">{{item.name}}</div>
              <div class="flex-box">
                <div class="d2"><p class="p1">{{item.orgs}}</p><p class="p2">组织</p></div>
                <div class="d2"><p class="p1">{{item.user}}</p><p class="p2">总人数</p></div>
                <div class="d2"><p class="p1">{{item.active}}</p><p class="p2">激活人数</p></div>
              </div>
            </div>
          </li>
        </ul>
      </scroller>
    </div>
  </div>
</template>
<script>
  import * as getData from '../service/getData'
  import * as mobile from '../config/mUtils'
  import headerGuide from '../components/header'
  export default {
    data () {
      return {
        list:[],
      }
    },
    mounted () {
      getData.getBlocs().then(res => {
        res.data.forEach((item,index) => {
          getData.getBlocStatisticData(item.bloc_id).then(subres => {
            let obj={}
            obj.orgs=subres.data.orgs_num
            obj.user=subres.data.user_num
            obj.active=subres.data.active_user_num
            this.list.push(Object.assign(res.data[index], obj))

          })
        })
      })

    },
    components: {
      headerGuide
    },

    computed: {

    },
    methods: {

    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .list{
    padding: 0 .26rem;
    margin-top: .18rem;
    padding-bottom: .18rem;
    li{

      margin-bottom: .26rem;
      background-color: #fff;
      border-radius: .1rem;
      padding: .26rem;
      padding-right: .1rem;
      position: relative;
      &.arr:after{
        content: '';
        width: .14rem;
        height: .14rem;
        background-color: #CE3C39;
        border-radius: 50%;
        position: absolute;
        right: .3rem;
        top:.3rem;
      }
      .pic{
        width: 1.38rem;
        height: 1.38rem;
        border: 1px solid #eee;
        border-radius: .1rem;
        overflow: hidden;

        img{
          width: 100%;
        }
      }
      .info{
        flex: 1;
        margin-left: .2rem;
        .d1{
          @include sc(.27rem,#333)
          margin-bottom: .3rem;
        }
        .d2{
          flex: 2;
          text-align: center;
          border-right: 1px solid #eee;
          &:first-child{
            flex: 1.3;
            text-align: left;
          }
          &:last-child{
            border-right: 0;
          }
          .p1{
            @include sc(.26rem,#444)
          }
          .p2{
            @include sc(.24rem,#999)
          }
        }
      }
    }
  }

</style>
