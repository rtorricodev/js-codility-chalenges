let listOfPairs = [];

function hasPair(iterator,array){
    let answer = false;


    for(let i= iterator + 1 ;i<array.length;i++){

        if ( array[iterator] === array[i] ){
            answer = true;
        }

    }

    for(let j= iterator - 1 ; j>0 ; j--){

        if ( array[iterator] === array[j] ){
            answer = true;
        }

    }

    return answer;

}


function solution(A) {
    let answer;
    for(let i = 0; i< A.length;i++){
        if(!hasPair(i,A)){
            answer = A[i];
        }
    }
    return answer;
}


console.log(solution([9,3,9,3,9,7,9]));
