function solution(balls, share) { 
    let ja = 1;
    let aa = balls-share;
    let a = 1;
    let b = 1;
    
     // ja
     for(i=balls; i>=1; i--){
        ja *= i;
    }
     // a
    for(j=aa; j>=1; j--){
        a *= j;
    }
     // b
    for(k=share; k>=1; k--){
        b *= k;
    }    
    return  Math.round(ja / (a * b));
}
solution(5, 3);
