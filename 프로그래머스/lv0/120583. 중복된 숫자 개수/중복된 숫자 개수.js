function solution(array, n) {
    var answer = 0;
    // for(i=0; i<array.length; i++){
    //     if(array[i]===n){
    //         answer ++
    //     }else{
    //         continue;
    //     }
    // }
    const arr = array.filter((i)=>i === n)
    return arr.length;
}