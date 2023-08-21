function solution(numbers) {
    const arr = numbers.sort((a,b)=> a - b ).reverse();    
    return arr[0]*arr[1]
}