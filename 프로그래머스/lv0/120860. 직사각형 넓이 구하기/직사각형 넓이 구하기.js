function solution(dots) {
    let x = dots.map(i => i[0]);
    let y = dots.map(i => i[1]);

    let maxX = Math.max(...x)
    let minX = Math.min(...x)
    let maxY = Math.max(...y)
    let minY = Math.min(...y)

    let width = maxX - minX;
    let height = maxY - minY;
    return width * height;
}
        
// function solution(dots) {
//     let x = dots.map(a => a[0]).sort() // 둘다 마이너스일 경우 ! 테스트 1 통과못함sx)[-1,-1,-3,-3] -> 콜백함수를 넣어서 sorting 해주던가 길이 너비 곱해줄때 Math.abs 절대값 써야함
//     let y = dots.map(a => a[1]).sort()
    
//     let width = x[3] - x[0]
//     let height = y[3] - y[0]
         
//     return width * height;
// }  

