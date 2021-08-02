const fs =require('fs');
const fileName="target.txt";

const errorHandle = (err) =>{
    console.log(err)
}

const dataHandle = (data) =>{
    console.log(data.toString());
}


fs.readFile(fileName, (err, data)=>{
        if(err) errorHandle(err)
        dataHandle(data)
})

console.log("Nodejs Async Programming");