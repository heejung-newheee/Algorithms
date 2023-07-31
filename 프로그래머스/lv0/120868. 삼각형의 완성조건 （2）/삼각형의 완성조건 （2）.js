function solution(sides) {
    let answer = 0;
    let sum = sides.reduce((a, b) => a + b);
    console.log(sum);
    let max1 = Math.max(...sides);
    console.log(max1);
    let min = Math.min(...sides);
    console.log(min);
    let x = min + max1 - 1;
    console.log(x);

    // 둘중 긴변이 있을때
    for (let i = max1; i <= sum - 1; i++) {
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

