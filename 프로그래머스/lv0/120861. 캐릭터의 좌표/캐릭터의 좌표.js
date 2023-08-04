function solution(keyinput, board) {
    var answer = [0,0];
    let mapX = (board[0]-1)/2
    let mapY = (board[1]-1)/2      
    
    // for문
    // for(i=0; i<keyinput.length; i++){
    //     if(keyinput[i] === "right" && answer[0] < mapX){
    //         answer[0]+=1
    //     }else if(keyinput[i] === "left" && answer[0] > -mapX){
    //         answer[0]-=1
    //     }else if(keyinput[i] === "up" && answer[1] < mapY){
    //         answer[1]+=1
    //     }else if(keyinput[i] === "down" && answer[1] > -mapY){
    //         answer[1]-=1
    //     }else {
    //         continue;
    //     }
    // }
    
    //switch문 조금 더 빠른듯
     keyinput.forEach(i => {
        switch(i) {
            case "right" :
                if(answer[0] < mapX) answer[0]+=1
                break;
            case "left" :
                if(answer[0] > -mapX) answer[0]-=1
                break;
            case 'up' :
                if(answer[1] < mapY) answer[1]+=1
                break;
            case 'down' :
                if(answer[1] > -mapY) answer[1]-=1
                break;  
            default:
                break;
        }
     })
        
    return answer;
}
