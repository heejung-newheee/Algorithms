function solution(start, end_num) {
    var answer = [];
    let count = 0;
    for(i=start; i>=end_num; i--){
        answer.push(i)        
    }
    return answer;
}