function solution(myString, pat) {
    var answer = 0;
    let arr = [...myString].map((item)=> {
        if(item === 'A') return "B"
        if(item === 'B') return "A"
    })
    if(arr.join("").includes(pat)) return 1;
    else return 0;
}