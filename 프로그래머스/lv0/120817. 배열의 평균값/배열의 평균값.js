function solution(numbers) {
    let sum = 0;
    for(i=0; i<numbers.length; i++) {
        sum+=numbers[i];
        console.log(sum)
    }
    
    
    // = numbers.reduce((a,b, i)=>{
    //     return (a + b )/ i
    // })
    return sum/numbers.length;
}