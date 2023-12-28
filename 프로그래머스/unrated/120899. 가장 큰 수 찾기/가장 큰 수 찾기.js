function solution(array) {
    let num = Math.max(...array)
    let idx = array.indexOf(num)
    return [num,idx];
}