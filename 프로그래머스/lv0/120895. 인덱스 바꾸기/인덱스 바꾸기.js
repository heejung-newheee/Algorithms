function solution(my_string, num1, num2) {
    let str = my_string.split('');
    let str2 = str[num1];
    str[num1] = str[num2];
    str[num2] = str2;

    return str.join('')
}

console.log(solution('hello', 1, 2));
