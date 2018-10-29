const println = console.log

const http = require("http")
const url = require("url")

let serverConf ={
    host:"localhost",
    port:3000
}

function start(route) {
    function onRequest(request,response){
        let pathname = url.parse(request.url).pathname
        route(pathname)
        println(`Request for ${pathname} received.`)
        response.write("welcome to NodeJs...")
        response.end()
    }

    let server = http.createServer(onRequest);
    server.listen(serverConf.port,serverConf.host,function () {
        println(`服务器运行在 http://${serverConf.host}:${serverConf.port}`)
    })
}

exports.start = start