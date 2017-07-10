import store from '../story/'
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}
/**
 * 获取地址栏参数
 */
export const getQueryString=(name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]); return null;
}

/**
 * 补0
 */
export const islength = (num) => {
  if(Number(num)<10){
    return '0'+num
  }else{
    return num
  }
}

/**
 * 表单校验
 */
export const rule={
  alert:function(mess){
    store.state.alertMessage=mess
    store.state.showAlert=true
  },
  empty:function(str,mess){//不能为空
    var strs=str.replace(/(^\s+)|(\s+$)/g,"");
    if(strs==''){
      this.alert(mess)
      return false
    }else{
      return true
    }
  },
  phone:function(str) {//手机号校验
    var myReg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!myReg.test(str)) {
      this.alert('手机号码有误')
      return false
    }else{
      return true
    }
  }

}




export const overscroll = els => {
  for (var i = 0; i < els.length; ++i) {
    var el = els[i];
    el.addEventListener('touchstart', function () {
      var top = this.scrollTop
        , totalScroll = this.scrollHeight
        , currentScroll = top + this.offsetHeight;
      if (top === 0) {
        this.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        this.scrollTop = top - 1;
      }
    });
    el.addEventListener('touchmove', function (evt) {
      if (this.offsetHeight < this.scrollHeight)
        evt._isScroller = true;
    });
  }
};//禁止body的滚动事件
document.body.addEventListener('touchmove', function (evt) {
  if (!evt._isScroller) {
    evt.preventDefault();
  }
});//给class为.scroll的元素加上自定义的滚动事件
//overscroll(document.querySelectorAll('.scroll'));



Array.prototype.remove = function(val) {//删除数组指定的某个元素
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
