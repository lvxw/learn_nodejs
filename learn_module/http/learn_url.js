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
    url = request.url
    console.log(url)
    switch(url){
        case '/':
            response.end("index")
            break;
        case '/a':
            response.end("a")
            break;
        case '/b':
            response.end("b")
            break;
        default:
            response.end('other')
            break

    }
})


server.listen(8081)
server.setTimeout(120000)
