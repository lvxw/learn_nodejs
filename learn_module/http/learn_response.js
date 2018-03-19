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
     * response： 常用属性
     */
    response.writeHead(200,'ok',{
        'content-type':'text/html;charset=utf-8'
    })
    response.write("你好中国",'utf-8')
    response.write("<h1>Hello</h1>")
    response.end("end")
})



server.listen(8081)
server.setTimeout(120000)
