function solution(n) {
    // let count=0;
    // for(i=1; i<=n;i++){
    //     for(j=1; j<=n; j++){    
    //         if(i * j == n){
    //            count++ 
    //         }else{
    //             continue;
    //         }            
    //     }
    // }
    // return count;
    
    let count = 0;
    for(i=1; i<=n; i++){
        if(n%i === 0) {
            count++;
        }
    }
    return count
}