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

