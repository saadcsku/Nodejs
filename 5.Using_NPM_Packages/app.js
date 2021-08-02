const http =require('http');

const server =http.createServer((req,res) =>{

    res.end("Welcome to core nodejs http modules test2")
})

server.listen(3000, ()=>{
    console.log("server running at port 3000")
});