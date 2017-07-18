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

var getOrgStructure = () => fetch('GET', '/api/index/getOrgStructure?apps=hs&bloc_id=8&org_id=18', {})






export {mainshops,getOrgStructure}
