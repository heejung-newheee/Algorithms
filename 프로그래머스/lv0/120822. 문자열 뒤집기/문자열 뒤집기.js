function solution(my_string) {
    // let arr = my_string.split('').reverse().join('')
    let arr = [...my_string].reverse().join('')
    return arr;
}