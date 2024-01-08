function solution(n) {
    var answer = [];
    for (i=0; i<n; i++) {
        answer.push(Array(n).fill(0));
    }
    for (i=0; i<answer.length; i++) {
        // answer 배열의 각 행에 대해서 반복
        const item = answer[i];
        // 현재 행을 나타내는 배열을 가져옴
        answer[i][i] = 1;
        // 현재 행의 대각선에 있는 요소를 1로 설정
    }

    return answer;
}