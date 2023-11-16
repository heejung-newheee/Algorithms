function solution(n) {
    const sqrtValue = Math.sqrt(n);

    // 정수 제곱근을 확인하여 정수인 경우에만 조건을 만족하도록 수정
    if (Number.isInteger(sqrtValue)) {
        return Math.pow(sqrtValue + 1, 2);
    } else {
        return -1;
    }
}