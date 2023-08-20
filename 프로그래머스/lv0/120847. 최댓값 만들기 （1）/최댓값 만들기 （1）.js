function solution(numbers) {
    var answer = 0;
    const arr = numbers.sort((a,b)=> a - b ).reverse();
    
    return arr[0]*arr[1]
}