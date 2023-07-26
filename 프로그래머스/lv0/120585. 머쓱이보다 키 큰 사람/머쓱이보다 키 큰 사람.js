function solution(array, height) {
    var answer = array.filter((item)=>{
        return item > height
    })
    
    return answer.length;
}