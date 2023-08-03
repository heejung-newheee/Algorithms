function solution(dots) {
    let x = dots.map(i => i[0]);
    let y = dots.map(i => i[1]);

    let maxX = Math.max(...x)
    let minX = Math.min(...x)
    let maxY = Math.max(...y)
    let minY = Math.min(...y)

    let width = maxX - minX;
    let height = maxY - minY;
    return width * height
}

solution([[1, 1], [2, 1], [2, 2], [1, 2]]);

    
    
    
    
    
// function solution(dots) {
//     let x = dots.map(a => a[0]).sort()
//     let y = dots.map(a => a[1]).sort()
    
//     let width = x[3] - x[0]
//     let height = y[3] - y[0]
         
//     return width * height;
// }
  

// function solution(dots) {
//     const width = Math.max(...dots.map(a => a[0]))-Math.min(...dots.map(a => a[0]))
//     const height = Math.max(...dots.map(a => a[1]))-Math.min(...dots.map(a => a[1]))
//     return width*height
// }
