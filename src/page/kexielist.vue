<template>
<div class="warp page1-1">
    <header-guide :goBack="true" :search="true" headTitle="组织成员">
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
        <div style="padding-bottom: .2rem;">
        <ul class="items">
        <item :model='model' v-for='(model,index) in list' :key="index"></item>
        </ul>
        </div>
      </scroller>
    </div>
  <transition name="router-slid" mode="out-in">
    <router-view></router-view>
  </transition>
  </div>
</template>
<script>
  import * as getData from '../service/getData'
  import * as mobile from '../config/mUtils'
  import headerGuide from '../components/header'
  import item from '../components/item'
  export default {
    data () {
      return {
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
      this.$store.state.list = this.list

    },
    components: {
      headerGuide,
      item
    },

    computed: {

    },
    methods: {

    }
  }

</script>
<style scoped lang="scss">
  @import '../assets/css/mixin';
  .items{
    margin-top: .2rem;


  }


  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }

</style>
