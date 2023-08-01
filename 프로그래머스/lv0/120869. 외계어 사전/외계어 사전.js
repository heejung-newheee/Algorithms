function solution(spell, dic) {
    let answer = 0;
    let result = 0;

    for(let i=0; i<dic.length; i++){
        for(let j=0; j<spell.length; j++){
            if(dic[i].indexOf(spell[j]) == -1){
                result++;
            } 
        }
        if(result > 0){
            answer = 2
        } else {
            answer = 1
        }
        result = 0;
        if(answer == 1) break;
    }

    return answer;
}