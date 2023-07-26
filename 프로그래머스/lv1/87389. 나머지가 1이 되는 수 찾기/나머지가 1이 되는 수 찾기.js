function solution(n) {
    var answer = 0;
    for(i=1; i<=n; i++){
        if(n%i === 1){
            return answer = i;
        } else {
            continue
        }
    }
    return answer;
}


// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }