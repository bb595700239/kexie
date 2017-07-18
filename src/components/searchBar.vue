<template>
  <form class="index-searchbox flex-box">
    <input type="search" placeholder="请输入关键词..." v-model="searchVal" @keyup="searchTarget" @change="searchAdd" >
    <i class="iconfont icon-close" @click.prevent="searchRemove" v-if="searchVal.length"></i>
    <i class="iconfont icon-search" @click.prevent="searchTarget" v-else></i>
  </form>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        searchVal: ''
      }
    },
    mounted () {
      //alert(this.searchKey)
      this.searchVal=this.searchKey;
    },

    computed: {
      ...mapState([
        'searchKey'
      ])
    },
    methods: {
      searchRemove () {
        this.searchVal = ''
        this.$store.state.searchKey=this.searchVal
      },
      searchTarget () {
        this.$store.state.searchKey=this.searchVal
      },
      searchAdd () {
        this.$store.state.searchKey=this.searchVal
      }
    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .index-searchbox{
    border: 1px solid #e2e3e3; background-color: #fff; padding: .1rem .2rem; border-radius: .3rem;
    display: flex;
    input{  background: none;font-size: .23rem;flex: 1;}
    i{
      @include wh(.5rem,auto);
      text-align: right;
      display: block;
      @include sc(.35rem,$green)
    }
  }

</style>
