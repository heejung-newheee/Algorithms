function solution(order) {
    var answer = 0;
    let newOrder = order.toString().split('')
    console.log(newOrder)
    for(i=0; i<newOrder.length; i++){        
    
      if(newOrder[i] === '3' || newOrder[i] === '6' || newOrder[i] === '9'){
          answer++
      }
    };
    return answer;
}