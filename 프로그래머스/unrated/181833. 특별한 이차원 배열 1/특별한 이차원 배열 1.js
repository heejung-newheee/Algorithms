function solution(n) {
    var answer = [];
    for (i=0; i<n; i++) {
        answer.push(Array(n).fill(0));
    }
    console.log(answer)
    for (i=0; i<answer.length; i++) {
        const item = answer[i];
        answer[i][i] = 1;
    }

    return answer;
}