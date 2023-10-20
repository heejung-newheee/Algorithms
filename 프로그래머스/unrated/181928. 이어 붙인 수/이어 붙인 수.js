function solution(num_list) {
    var answer = 0;
    let odd = [];
    let even = [];
    for(i=0; i<num_list.length; i++){
        if(num_list[i]%2===0){
            even.push(num_list[i])
        }else {
            odd.push(num_list[i])
        }
    }
    let sumOdd = odd.join('')
    let sumEven = even.join('')
    return Number(sumOdd)+Number(sumEven);
}