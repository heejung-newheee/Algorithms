function solution(n) { 
    let arr = String(n).split('').map((i)=>Number(i))
    return arr.reduce((a,b)=>a+b,0);
}