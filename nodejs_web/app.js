const log = console.log
const println = log

const http = require("http")
let serverConf ={
    host:"localhost",
    port:3000
}

let server = http.createServer(function (req, res) {
    res.end("welcome to NodeJS...")
})

server.listen(serverConf.port,serverConf.host,function () {
    println(`服务器运行在 http://${serverConf.host}:${serverConf.port}`)
})


