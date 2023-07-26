const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const spreadStr = [...str];
    const newArr = spreadStr.map((item)=>{
        const uni = item.charCodeAt();
        if(uni >= 97){
            return item.toUpperCase();
        }else{
            return item.toLowerCase();
        }
    });
    console.log(newArr.join(""));
});