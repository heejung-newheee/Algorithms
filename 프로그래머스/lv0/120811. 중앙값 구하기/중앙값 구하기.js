function solution(array) {
    let aa = array.length/2
    let bb = array.sort((a,b)=>a-b)
    return bb[Math.floor(aa)];
}