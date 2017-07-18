<template>
<div class="warp page1-2">
    <header-guide :goBack="true">
      <form class="index-searchbox flex-box" slot="searchbox">
        <input type="search" placeholder="请输入关键词..." v-model="searchVal" >
        <i class="iconfont icon-close" @click.prevent="searchRemove" v-if="searchVal.length"></i>
        <i class="iconfont icon-search" @click.prevent="searchTarget" v-else></i>
      </form>
    </header-guide>
    <div class="main-box scroll" style="height:calc(100vh - .86rem);">
      <scroller ref="my_scroller">
        <!--<div class="items">
          <div class="item">
            <div class="tit flex-box"><i class="iconfont icon-playfill"></i><div class="name">会长</div><div class="num">1/1</div></div>
            <ul>
              <li class="flex-box">
                <div class="pic flex-box"><img src="../assets/images/user.png" alt=""></div>
                <div class="info"><p class="p1">马云</p><p class="p2">阿里巴巴董事长</p></div>
              </li>
            </ul>
          </div>
        </div>-->
        <div v-if="html" class="items" v-html="html">

        <!--<itemsearch :model='model' v-for='(model,index) in list' :key="index"></itemsearch>-->
        </div>
        <div class="nodata" v-else>sorry,没有您想要的信息</div>
      </scroller>
    </div>
  </div>
</template>
<script>
  import * as getData from '../service/getData'
  import * as mobile from '../config/mUtils'
  import headerGuide from '../components/header'
  import itemsearch from '../components/itemsearch.vue'
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        html:'',
        searchVal: '',
        list:[{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "data": {
              "menuName": "会长部",
              "totalNum":500,
              "currentNum":200,
            },
            "childTreeNode": [{

              "body":[{"name":"马云s","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白s","position":"酒厂董事长","pic":''}]

            }]
          }, {
            "data": {
              "menuName": "副会长",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }, {
            "data": {
              "menuName": "常务理事",
              "totalNum":200,
              "currentNum":0,
            },
            "childTreeNode": []
          }]
        },{
          "id": "1",
          "data": {
            "menuName": "副会长",
            "totalNum":500,
            "currentNum":200,
          },
          "childTreeNode": [{
            "body":[{"name":"马云dd","position":"阿里巴巴董事长","pic":'../assets/images/user.png'},{"name":"李白","position":"酒厂董事长","pic":''}]

          }]
        }]

      }
    },
    mounted () {
      this.init()

    },
    components: {
      headerGuide,
      itemsearch
    },

    computed: {
      ...mapState([
        'searchKey'
      ])

    },
    methods: {
      searchRemove () {
        this.searchVal = ''
      },
      searchTarget () {
        this.init()
      },
      init(){
        var _this=this;
        this.html='';
        function eachdata(arr){
          arr.forEach((item,index) => {
            if(item.body){
              item.body.forEach((subitem,subindex) => {
                if(subitem.name.indexOf(_this.searchVal)>=0){
                  _this.html+=`<div class="li" onclick="alert(${subindex})">${subitem.name}</div>`
                }
              })
            }else{
              if(item.data.menuName.indexOf(_this.searchVal)>=0){
                _this.html+=`<div class="li li2" onclick="alert(${index})">${item.data.menuName}</div>`
              }
            }
            if(item.childTreeNode){

              eachdata(item.childTreeNode)
            }
          })
        }
        eachdata(this.$store.state.list||this.list)
      }

    },
    watch:{
      searchVal(){
        this.init()

      }
    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';

  .index-searchbox{
    margin-right: .3rem;
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
