<template>

  <li class="item">

    <!--<div class="items">
      <div class="item" v-show="open" v-if='isFolder'>
        <div class="tit flex-box"  @click='toggle'><i class="iconfont icon-playfill" :class="[open?'fa-folder-open':'fa-folder']"></i><div class="name">会长</div><div class="num">1/1</div></div>
        <ul>
          <li class="flex-box">
            <div class="pic flex-box"><img src="../assets/images/user.png" alt=""></div>
            <div class="info"><p class="p1">马云</p><p class="p2">阿里巴巴董事长</p></div>
          </li>
        </ul>
      </div>
    </div>-->



    <div @click='toggle' v-if="!model.body">
      <div class="tit flex-box"><i class="iconfont icon-unfold" :class="[open?'open':'']" v-if='isFolder'></i><i class="iconfont icon-move" v-else></i><div class="name" :class="[!isFolder?'folder':'']" >{{model.data.menuName}}</div><div class="num">{{model.data.currentNum}}/{{model.data.totalNum}}</div></div>
    </div>
    <ul v-if="model.body">
      <router-link tag="li" to="/allxuehui" class="flex-box users" v-for="(item,index) in model.body" :key="index">
        <div v-if="item.pic" class="pic flex-box"><img :src="item.pic" alt=""></div>
        <div  class="pic text" v-else>{{item.name | filename}}</div>
        <div class="info"><p class="p1">{{item.name}}</p><p class="p2">{{item.position}}</p></div>
      </router-link>
    </ul>
    <ul v-show="open" v-if='isFolder'>
      <items v-for='(cel,index) in model.childTreeNode' :model='cel' :key="index">
      </items>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'items',
    props: ['model'],
    data () {
      return {
        open: false,
      }
    },
    created () {

    },
    computed: {
      isFolder() {
        return this.model.childTreeNode && this.model.childTreeNode.length
      }
    },

    methods:{
      toggle: function() {
        if(this.isFolder) {
          this.open = !this.open
        }
      }
    },
    components: {
    },
    filters:{
      filename(val){
        return val.substr(val.length-2)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
.item{
    .item{
      border: none;
      padding-right: 0;
    }
    }
    .item{
      border-bottom: 1px solid #eee;
      padding: 0 .26rem;

      background-color: #fff;
      .tit{
        position: relative;
        padding:.2rem 0;
        i{
          @include sc(.28rem,#999);
          margin-right: .1rem;

          &.open{
            transform:rotate(180deg);
          }
          position: absolute;

        }
        .name{
          padding-left: .48rem;
          flex: 1;
          @include sc(.28rem,#333)
          font-weight: 700;
          &.folder{
            color: #999;
          }
        }
        .num{
          background-color: #e7f4fc;
          padding: 0 .1rem;
          border-radius: .2rem;
          color: #34454c;
        }
      }
      ul{
        margin-left: .2rem;

        li{

          &.users{
            border-bottom: 1px solid #f2f2f2;
            padding: .15rem 0;
            &:last-child{
              border-bottom: none;
            }

          }
          .pic{
            overflow: hidden;
            width: .7rem;
            height: .7rem;
            border-radius: 50%;
            margin-right: .2rem;
            background-color: #ddd;
            &.text{
              background-color: #92a0a9;
              text-align: center;
              line-height: .7rem;
              color: #fff;
            }

            img{
              width: 100%;
            }
          }
          .info{
            .p1{
              @include sc(.27rem,#444)
            }
            .p2{
              color: #999;
            }
          }
        }
      }
    }

</style>
