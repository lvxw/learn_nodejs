/**
 * 创建服务器
 */

http = require('http')

// 创建服务器对象
var server = http.createServer();

// 绑定error事件，当有错误发生时触发
server.on('error',function (err) {
    console.log(err)
})

// 绑定listening事件，服务器监听成功后触发
server.on('listening',function () {
    console.log("listening............")
})

// 绑定request事件，当有请求到来时触发
server.on('request',function (request,response) {
    console.log(request)
})

//监听8080端口
server.listen(8080)

// 打印服务器地址信息
console.log(server.address())