function solution(my_strings, parts) {
    var answer = '';
    for(let i=0; i<my_strings.length;i++){
        answer+= my_strings[i].split('').slice(parts[i][0],parts[i][1]+1).join('')
    }
    return answer;
    
    
    // for(i=0; i<my_strings.length; i++){
    //     let str = my_strings.map((v)=> {
    //         return v.slice(parts[0], parts[1])                                             
    //     console.log(str)})
    //     answer+=str
    // }
    // return answer;
}