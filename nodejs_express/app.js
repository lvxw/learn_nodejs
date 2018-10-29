const println = console.log

const express = require("express")

let app = express()

app.get("/",function (req, res) {
    res.end(req.url+"")
})

app.get("/abc",function (req, res) {
    res.end(req.url+"")
})

let server = app.listen(8081,function(){
    let address = server.address().address;
    println(address)
})