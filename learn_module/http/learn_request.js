/**
 * 创建服务器
 */
http = require('http')

var server = http.createServer();


server.on('error',function (err) {
    console.log(err)
})
server.on('listening',function () {
    console.log("listening............")
})



server.on('request',function (request,response) {
    /**
     * requset： 常用属性
     */
    console.log(request.httpVersion)
    console.log(request.url)
    console.log(request.method)
})



server.listen(8081)
server.setTimeout(120000)
