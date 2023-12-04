function solution(myString, pat) {
//     let arr = [...myString].map((item)=> {
//         if(item === 'A') return "B"
//         if(item === 'B') return "A"
//     })
//     if(arr.join("").includes(pat)) return 1;
//     else return 0;
    
    
    return [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0
}
