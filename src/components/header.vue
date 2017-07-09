<template>
  <header class="top-searchbar flex-box">
    <div class="back"  v-if="goBack" @click="$router.go(-1)">
      <i class="iconfont icon-back_android"></i>
    </div>
    <div class="searchbar-con">
      <slot name="searchbox"></slot>
    </div>

    <div style="flex: 1" v-if="headTitle">
    <section class="title-head ellipsis">
      {{headTitle}}
    </section>
    </div>
    <div class="search"  v-if="search">
      <i class="iconfont icon-search" @click="$router.push('/kxlist/search')"></i>
    </div>

  </header>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    data () {
      return {

      }
    },
    created () {


    },
    props: ['searchKey','headTitle', 'goBack', 'search'],
    computed: {

    },

    methods:{

    },
    components: {
    },
  }
</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .top-searchbar{
    position: relative;
    z-index: 200;
    height: .86rem;
    background-color: #fff;
    border-bottom:1px solid #ddd;
    .back,.search{
      padding: 0.1rem 0.2rem;
      i{
        @include sc(.48rem,#707070)
      }
    }
    .search{
      i{
        font-size: .4rem;
      }
    }
    .searchbar-con{
      flex: 1;
      margin:0 .1rem;
    }
    .title-head{
      @include center;
      width: 50%;
      text-align: center;
      @include sc(0.30rem, #464646);
      text-align: center;
    }
  }
</style>
