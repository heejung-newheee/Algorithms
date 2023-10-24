function solution(num_list) {
    let answer=-1;
    for(i=0; i<num_list.length; i++){
        if (num_list[i] < 0) {
            answer = i
            break;
        }
    }
    return answer
}

// function solution(num_list) {
//     return num_list.findIndex((num) => num < 0);
// }