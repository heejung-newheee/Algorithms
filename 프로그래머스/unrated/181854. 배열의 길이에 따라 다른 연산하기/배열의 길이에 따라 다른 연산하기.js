function solution(arr, n) {
    // var answer = [];
    // if(arr.length % 2 === 1) {
    //     for(i=0; i<arr.length; i++){
    //         if(i%2 === 0) answer.push(arr[i] + n)
    //         else answer.push(arr[i])
    //     }
    // } else if(arr.length % 2 === 0) {
    //     for(i=0; i<arr.length; i++){
    //         if(i%2 === 1)answer.push(arr[i] + n)
    //         else answer.push(arr[i])
    //     }
    // }
    // return answer;
    
    return arr.map((v,i)=>arr.length%2^i%2?v+n:v)
    // arr.map((v, i) => v + (arr.length-i) % 2 * n);
}