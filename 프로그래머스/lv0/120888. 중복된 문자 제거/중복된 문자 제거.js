function solution(my_string) {
    var answer = '';
    let arr = my_string.split("")
    for(i=0; i<arr.length; i++){
        if(answer.includes(arr[i])){
            continue
        }else{
            answer+=arr[i]
        }         
    }
    return answer;
}