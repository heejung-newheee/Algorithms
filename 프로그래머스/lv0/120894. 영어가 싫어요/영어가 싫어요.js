function solution(numbers) {
    let array = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(i=0; i<=array.length; i++){
        numbers = numbers.replaceAll(array[i],i);
    }
    return +numbers;
}
solution("onetwothreefourfivesixseveneightnine")
