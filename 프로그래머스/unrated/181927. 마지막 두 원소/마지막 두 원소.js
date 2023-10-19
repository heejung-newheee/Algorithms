function solution(num_list) {
    var answer = num_list;
    let num = 0;
    let lastNum = num_list.length-1
    if(num_list[lastNum]>num_list[lastNum-1]) {
        num = num_list[lastNum]-num_list[lastNum-1]
        answer.push(num)
    } else {
        num = num_list[lastNum]*2
        answer.push(num)
    }    
    return answer;
}