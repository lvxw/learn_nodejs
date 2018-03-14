
//创建一个长度为5的Bufeer对象；buffer长度固定，不可改变
var buffer = new Buffer(5);
//创建Buffer的第二种方式
var buffer2 =new Buffer([1,2,3])
//创建Buffer的第三种方式
var buffer3 =new Buffer("lvxw",'utf-8')
//此处length表示字buffer3节数组的长度，并非字符常常度
for(var i=0;i<buffer3.length;i++){
    console.log(String.fromCharCode(buffer3[i]))
}

var str = "美丽中国"
var buffer4 = new Buffer(str)
console.log(str.length)                 //4
console.log(buffer4.length)             //12
