function solution(a, b) {
    let result = 0;
    let str1 = a.toString();
    let str2= b.toString();
    
    let sum1 = parseInt(str1  + str2);
    let sum2 = parseInt(str2  + str1);
    
    if(sum1 >sum2){
        result = sum1
    }else {
        result = sum2
    }
    
    return result
   
}