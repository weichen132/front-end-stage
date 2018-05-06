var demo2 = require('./demo2.js')
var demo1 =  require('./demo1.js')
var data = [demo2,demo1]

function getApiData(api){
    var r = data.filter((item)=>{
       if(item.api === api){
           return true
       }
    })
    if(r&&r.length){
        return r[0].response
    }else{
        return {
            code: 500,
            data:{},
            msg:'无匹配api'
        }
    }
   }

module.exports = getApiData
//module.exports = data