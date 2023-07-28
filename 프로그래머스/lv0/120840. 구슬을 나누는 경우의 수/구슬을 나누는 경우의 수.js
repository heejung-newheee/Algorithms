function solution(balls, share) { 

    // for문 풀이
//         let ja = 1;
//     let aa = balls-share;
//     let a = 1;
//     let b = 1;
    
//      // ja
//      for(i=balls; i>=1; i--){
//         ja *= i;
//     }
//      // a
//     for(j=aa; j>=1; j--){
//         a *= j;
//     }
//      // b
//     for(k=share; k>=1; k--){
//         b *= k;
//     }    
//     return  Math.round(ja / (a * b));
    
    //  재귀함수 풀이 - 몇몇 테스트가 재귀함수가 더 빠르다
    let result = 0;
    function factorial(n){
        if (n == 0 || n == 1) {
          return 1;
        } else {
          return n * factorial(n - 1)
        }   
    }     
    if(balls === share){
        return 1
    }    
    result = Math.round(factorial(balls)/ (factorial(balls-share) * factorial(share)))
    return result;   
    
}
solution(5, 3);
