console.log(process.execPath)
console.log(global.process.argv)
var pids = process.pid;
setInterval(function () {

    console.log(pids)
},1000);
console.log(pids)
process.exit(0)