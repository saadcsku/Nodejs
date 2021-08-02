const fs =require('fs');


const fileName="target.txt"

// This is Sync (blocking code)
const data= fs.readFileSync(fileName)
console.log(data.toString());

console.log("This will come in last");