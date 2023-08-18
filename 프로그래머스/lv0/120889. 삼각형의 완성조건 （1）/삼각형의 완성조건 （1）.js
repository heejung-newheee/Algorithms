function solution(sides) {
    // var answer = 0;
    // let maxNum = Math.max(...sides);
    // let rest = sides.filter((item)=>item !== maxNum);
    // let sum = rest.reduce((a, b) => a + b, 0);
    // if(maxNum < sum ){
    //     answer=1;
    // }else {
    //     answer=2;
    // }
    // return answer;
    
    let sortArr = sides.sort((a,b)=>{ return a-b});
    let sum = sortArr[0] + sortArr[1]
       if(sum > sortArr[2] ){
        return 1;
    }else {
        return 2;
    }
    return 
}