const println = console.log

const events = require("events")

let eventEmitter = new events.EventEmitter()


eventEmitter.on("start",function () {
    println("start...")
})
eventEmitter.emit("start")


eventEmitter.addListener("advance",function (cb) {
    cb()
})
eventEmitter.emit("advance",function () {
    println("回调函数执行")
})


eventEmitter.on("running",function (args) {
    println("running1:"+args)
})

eventEmitter.on("running",function (arg0,arg1) {
    println("running2:"+arg0+","+arg1)
})

eventEmitter.emit("running",1,2)


println(eventEmitter.listeners("running"))
println(eventEmitter.listenerCount("running"))


