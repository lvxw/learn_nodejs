/**
 * 创建服务器
 */
var http = require('http')
var url = require('url')
var fs = require('fs')
var querystring = require('querystring')

var htmlDir = __dirname + '/html/'

var server = http.createServer();

server.on('error',function (err) {
    console.log(err)
})

server.on('listening',function () {
    console.log("listening............")
})



server.on('request',function (request,response) {
    var urlStr = url.parse(request.url)
    switch (urlStr.pathname){
        case "/":
            sendData(htmlDir+'index.html',request,response)
            break;
        case "/user":
            sendData(htmlDir+'user.html',request,response)
            break;
        case "/login":
            sendData(htmlDir+'login.html',request,response)
            break;
        case "/login/cheak":

            if(request.method == "POST"){
                var str = ''
                request.on('data',function (chunk) {
                    str += chunk
                })

                request.on('end',function () {
                    var paramObj = querystring.parse(str)
                    console.log(paramObj)
                })
            }
            break;
        default:
            sendData(htmlDir+'err.html',request,response)
            break;
    }
})


server.listen(8081)
server.setTimeout(120000)


/**
 * 根据不同的访问路径，响应不同的数据
 * @param filePath  html文件的路径
 * @param req
 * @param res
 */
function  sendData(filePath,req,res) {
    fs.readFile(filePath,function (err,data) {

        if(err){
            res.writeHead(404,'ok',{
                'content-type':'text/html;charset=utf-8'
            })
            sendData(htmlDir+'err.html',req,res);
        }else{
            res.writeHead(200,'ok',{
                'content-type':'text/html;charset=utf-8'
            })
            res.end(data)
        }
    })
}
