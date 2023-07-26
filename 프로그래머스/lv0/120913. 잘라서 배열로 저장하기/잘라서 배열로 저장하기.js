function solution(my_str, n) {
    let answer = [];
    let num =0;
    for(i=num; i<my_str.length; i=num){
        answer.push(my_str.substr(num,n))
        num += n
    }    
    return answer;
}

solution("abc1Addfggg4556b",6)