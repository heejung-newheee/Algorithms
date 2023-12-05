function solution(rsp) {
//     let str = [...rsp].map((v)=> {
//         switch(v) {
//           case '2':
//             return '0'
//             break;

//           case '0':  
//             return '5'
//             break;

//         case '5':  
//             return '2'
//             break;

//           default:
//             break;
//         }
//     })
//     return str.join('');
    
    // 삼항연산자
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
    
    // 객체사용
    // let arr = {
    //     2: 0,
    //     0: 5,
    //     5: 2
    // };
    // var answer = [...rsp].map(v => arr[v]).join("");
    // return answer;
    
    
}