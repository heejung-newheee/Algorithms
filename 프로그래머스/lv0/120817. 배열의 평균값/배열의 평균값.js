function solution(numbers) {
    // let sum = 0;
    // for(i=0; i<numbers.length; i++) {
    //     sum+=numbers[i];
    //     console.log(sum)
    // }
    // return sum/numbers.length;
    
    // 리듀스가 훨씬빠룸!
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;  
}
