function solution(sides) {
    let answer = 0;
    let max1 = Math.max(...sides);
    let min = Math.min(...sides);
    let sum = max1 + min;
    let x = min + max1 - 1;

    // 둘중 긴변이 있을때
    for (let i = max1; i <= (max1+min) - 1; i++) {
        answer++;
        console.log(answer);
    }
    // 나머지가 가장 긴변
    for (let i = max1 + 1; i <= x; i++) {
        answer++;
        console.log(answer);
    }

    return answer;
}

