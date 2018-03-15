var fs = require('fs')

//异步方式
var filepath = '../learn_module'
/**
 * charset:       字符编码
 * callback:      回调函数
 */
fs.readdir(filepath,function (err,fileNameList) {
    fileNameList.forEach(function (ele) {
        fs.stat(ele,function (err,info) {
            switch (info.mode){
                case 16822:
                    console.log('[文件夹]'+ele);
                    break;
                case 33206:
                    console.log('[文件]'+ele);
                    break;
                default:
                    console.log('[其他类型]'+ele)
                    break;
            }
        })
    })
})
