function hasDecimals(num) {
    return (num % 1 != 0);
}

function solution(X, Y, D) {
    let result = (Y-X)/D;

    return (Math.ceil(result));
}


console.log(solution(10,85,30))