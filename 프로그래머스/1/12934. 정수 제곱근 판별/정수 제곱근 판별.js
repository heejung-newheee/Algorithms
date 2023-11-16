function solution(n) {
    // const sqrtValue = Math.sqrt(n);
    // if (Number.isInteger(sqrtValue)) {
    //     return Math.pow(sqrtValue + 1, 2);
    // } else {
    //     return -1;
    // }
    
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1
}