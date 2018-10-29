var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    console.log(params)
    res.write("网站名：" + params.q);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();

}).listen(3000);