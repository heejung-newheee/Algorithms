function solution(array) {
    let center = array.length/2
    let sort = array.sort((a,b)=>a-b)
    return sort[Math.floor(center)];
}