<template>

  <div class="item">
    <div v-if="!model.body && model.data.menuName.indexOf($store.state.searchKey)>=0">{{model.data.menuName}}</div>
    <div v-if="model.body && item.name.indexOf($store.state.searchKey)>=0 " v-for="(item,index) in model.body" :key="index">{{item.name}}</div>
    <items v-for='(cel,index) in model.childTreeNode' :model='cel' :key="index">
    </items>
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




  </div>
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


</style>
