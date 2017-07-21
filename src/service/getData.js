import fetch from '../config/fetch'

var getOrgStructure = () => fetch('GET', '/api/index/getOrgStructure?apps=hs&bloc_id=8&org_id=18', {})

var getBlocs = () => fetch('GET', '/api/index/getBlocs?apps=hs', {})

var getBlocStatisticData = (id) => fetch('GET', '/api/index/getBlocStatisticData', {apps:'hs',bloc_id:id})


export {getOrgStructure,getBlocs,getBlocStatisticData}
