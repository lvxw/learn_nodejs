const println = console.log

const express = require("express")

let app = express()
app.use(express.static("public"))

app.get("/",function (req, res) {
    res.sendFile(__dirname+"/"+"1.html")
})

let server = app.listen(8081,function(){
    let address = server.address().address;
    println(address)
})