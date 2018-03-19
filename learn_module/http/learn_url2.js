/**
 * 创建服务器
 */
var http = require('http')
var url = require('url')

var server = http.createServer();


server.on('error',function (err) {
    console.log(err)
})
server.on('listening',function () {
    console.log("listening............")
})



server.on('request',function (request,response) {
    var urlStr = url.parse(request.url)
    console.log(urlStr)
    console.log(urlStr.pathname)
    if(urlStr.query){
        var paramArr = urlStr.query.split('&')
        console.log(paramArr)
    }
    response.end("123")
})


server.listen(8081)
server.setTimeout(120000)
