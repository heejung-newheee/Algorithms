function solution(num_list) {
    var answer = 0;
    let num1 = 0;
    let num2 = 0;
    for(i=0; i<num_list.length; i++){
        if(i % 2 !== 0) num1 += num_list[i]
        if(i % 2 === 0) num2 += num_list[i]
    }
    if(num1 >= num2) return num1;
    if(num1 <= num2) return num2;
    
    
//     let odd = 0;
//     let even = 0;
//     num_list.forEach((x,i) => i%2 == 0 ? even += x : odd += x);
//     return Math.max(odd, even);
}