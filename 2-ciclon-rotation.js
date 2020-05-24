


function rotate(array){
    let temporal;
    let newTemporal;
    
    for(let i = 0; i < array.length  ; i++) {    
        if(i===0){
            temporal = array[i]
            array[i] = array[array.length - 1]
        }else{
            newTemporal = array[i];
            array[i] = temporal;
            temporal = newTemporal;
        }
    }
    return array;
}


function solution(A, K) {
    for(let i = 0; i < K; i++){
        rotate(A);
    }
    return A;
}


console.log(solution([3,8,7,9,6],3))