const println = console.log

println(__filename)
println(__dirname)

console.time("duration")

println(process.env.JAVA_HOME)

println(process.execPath)


console.timeEnd("duration")


println(process.stdout.connecting)

println(process.argv)
