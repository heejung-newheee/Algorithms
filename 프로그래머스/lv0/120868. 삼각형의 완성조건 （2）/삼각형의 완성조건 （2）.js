function solution(sides) {
    let answer = 0;
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    let x = min + max - 1;

    // 둘중 긴변이 있을때
    for (let i = max; i <= (max+min) - 1; i++) {
        answer++;
    }
    // 나머지가 가장 긴변
    for (let i = max + 1; i <= x; i++) {
        answer++;
    }
    
    return answer;
}


// function solution(sides) {
//     return Math.min(...sides)*2-1
// }


