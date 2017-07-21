<template>

  <div class="item">
    <div v-if="!model.body && model.data.menuName.indexOf($store.state.searchKey)>=0">{{model.data.menuName}}</div>
    <div v-if="model.body && item.name.indexOf($store.state.searchKey)>=0 " v-for="(item,index) in model.body" :key="index">{{item.name}}</div>
    <items v-for='(cel,index) in model.childTreeNode' :model='cel' :key="index">
    </items>
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
