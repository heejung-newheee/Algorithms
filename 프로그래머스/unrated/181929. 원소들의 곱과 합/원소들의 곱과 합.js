function solution(num_list) {
    let sum = num_list.reduce((a,b)=>a*b,1)
    let add = num_list.reduce((a,b)=>a+b,0)
    let pow = add * add
    if(sum > pow) return 0
    else if(sum < pow) return 1
}