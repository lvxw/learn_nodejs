var buf = new Buffer("hello world")
// copy方法，生成的新buffer与原buffer无关
var newBuf1 = buf.copy(buf)
var newBuf2 = buf.copy(buf,1)
var newBuf3 = buf.copy(buf,1,3)
