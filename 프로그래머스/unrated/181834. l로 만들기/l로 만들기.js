function solution(myString) {
    let str = myString.split('').map((v)=>v < 'l' ? "l" : v);
    return str.join('')
}