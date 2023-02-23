let http = require("http")
let fs = require("fs")

let server = http.createServer((req,res) =>{

    let stream =fs.createReadStream("sample.abc")
    stream.pipe(res)
    // fs.readFile("sample.abc", (err,data)=>{
    //     res.end(data)
    // })
})

server.listen(3000)