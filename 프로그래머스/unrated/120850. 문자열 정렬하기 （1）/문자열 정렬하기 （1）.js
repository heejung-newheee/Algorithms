function solution(my_string) {
//     const regex = /[^0-9]/g;
//     const result = my_string.replace(regex, "");
//     return result.split("").map(Number).sort();
    
    
    return my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)
}