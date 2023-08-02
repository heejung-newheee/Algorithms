function solution(M, N) {
    var answer = 0;
    let width = M - 1;
    let height = M * (N - 1);
    answer = width + height;
    return answer;
}