import fetch from '../config/fetch'


/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}


  var mainshops = (page, commodityTypeId = '', keyWord = '', sortFlag = '') => fetch('GET', '/api/index/commodity/commodityList', {pageIndex: page, commodityTypeId: commodityTypeId, keyWord: keyWord, sortFlag: sortFlag})






export {mainshops}
