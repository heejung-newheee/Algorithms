function solution(n) {
    var result = 0;
    let arr = n.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    }

    return result;
}