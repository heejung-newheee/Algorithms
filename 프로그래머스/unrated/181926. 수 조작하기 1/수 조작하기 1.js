function solution(n, control) {
    var answer = 0;
    for(i=0; i<control.length; i++){
        switch (control[i]) {
            case 'w' :      //w이면 n=n+1
                n += 1;
                break;
            case 's' :      //s이면 n=n-1
                n -= 1;
                break;
            case 'd' :      //d이면 n=n+10
                n += 10;
                break;
            case 'a' :      //a이면 n=n-10
                n -= 10;
                break;
        }
    }
    return n;
}