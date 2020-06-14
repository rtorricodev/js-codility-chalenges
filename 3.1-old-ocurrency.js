


function solution(A) {
    let answer;

    let virtualArray = [];
    let counterArray = [];

    for(let i = 0; i< A.length;i++){
        if(!virtualArray.includes(A[i])){
            virtualArray.push(A[i])
        }
    }

    for(let j = 0; j < virtualArray.length;j++){
        let counter = 0;
        for(let i = 0; i< A.length;i++){
            if(virtualArray[j] === A[i] ){
                counter += 1;
            }
        }
        counterArray.push(counter);
    }
    

    for(let k = 0;k < counterArray.length;k++){
        if(counterArray[k]===1){
            answer = virtualArray[k];
        }
    }

 

    return answer;
}


console.log(solution([9,3,9,3,9,7,9]));
