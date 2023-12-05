function solution(rsp) {
    let str = [...rsp].map((v)=> {
        switch(v) {
          case '2':
            return '0'
            break;

          case '0':  
            return '5'
            break;

        case '5':  
            return '2'
            break;

          default:
            break;
        }
    })
    return str.join('');
}