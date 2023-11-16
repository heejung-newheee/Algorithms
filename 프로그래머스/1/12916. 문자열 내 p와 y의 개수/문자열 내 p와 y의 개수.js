function solution(s){
    var answer = true;
    let str = s.toLowerCase()
    let countp = 0;
    let county = 0;
    for(i=0; i<str.length; i++){
        if(str[i]==='p') countp++
        else if(str[i]==='y') county++
    }
    if(countp === county) return true;
    else if(countp !== county) return false
    
}