function solution(n) {
    let pz = 6;
    while(pz%n !== 0){
        pz+=6;       
    }
    return pz/6
}