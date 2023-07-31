function solution(sides) {
    let x = 0;
    let sum = sides.reduce((a,b) => (a+b))
    let max1 = Math.max(...sides)
    console.log(max1)
    let min = Math.min(...sides)
    console.log(min)
    let count = 0;
    for(let i=min; i<=max1; i++){
        count ++
    }
    console.log(count)
    
    (sum>x && max<x)
    
    
    
    
    
    var answer = 0;
    return answer;
}

solution([11, 7])