process.stdout.write("请输入：\n");
process.stdin.resume();
process.stdin.on('data',function (data) {
    console.log(data.toString())
});