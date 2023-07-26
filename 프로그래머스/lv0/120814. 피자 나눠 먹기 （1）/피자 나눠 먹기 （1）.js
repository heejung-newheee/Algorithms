function solution(n) {
    let answer=0;
    let slice = 7;
    if(slice%n === 0 ){
        answer = n /slice
    }else{
        answer = (n/slice)
    }
    return n.slice > 1 ?  Math.floor(answer) : Math.ceil(answer) ;
}