function solution(X, Y, D) {
    let jumpCounter = 0;
    let actualPosition = X;

    
    while(actualPosition< Y){
        actualPosition = actualPosition + D;
        jumpCounter += 1; 
    }
    return jumpCounter;
}


console.log(solution(10,80,30))