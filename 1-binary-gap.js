

let openedGap = 0;

function isGap(binary){
    let response = true;
    if(binary === '1'){
        response = false;
        openedGap += 1;
    }
    return response;
}


function solution(N){
    let binary = N.toString(2);
    let consecutiveZeros = 0;
    let longuestBinaryGap = 0;

    for (let i = 0; i < binary.length; i++){

      
        if(isGap(binary[i])){
            consecutiveZeros += 1
            if(consecutiveZeros >= longuestBinaryGap){
                longuestBinaryGap = consecutiveZeros;
            }
        }else{
            consecutiveZeros = 0;
        }
    }

    if (openedGap >= 2){
        return longuestBinaryGap;
    }else{
        return 0;
    }
}


console.log(solution(32));