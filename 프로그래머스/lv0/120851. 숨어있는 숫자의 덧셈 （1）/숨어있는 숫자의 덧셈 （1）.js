function solution(my_string) {
    let result = 0; 
    // for(i=0; i<my_string.length; i++){
    //     if(Number.isInteger(i) === true){
    //         result +=my_string[i]
    //     }else {
    //         result +=0
    //     }
    // }
    // .map(i=>Number(i)).reduce((acc,val)=>acc+val)
    for(i=0; i<my_string.length; i++){
        if(isNaN(my_string[i]) === false){
            result +=Number(my_string[i])
        }        
    }
    return result
    
}