function solution(N) {
    const binary = N.toString(2);
    const gaps = binary.match(/(?!1)(0+)(?=1)/g);
    if(gaps) {
        const biggerGap = gaps.reduce((gap1, gap2) => gap1.length >= gap2.length ? gap1 : gap2 )
        return biggerGap.length;
    } else {
        return 0;
    }

}

console.log(solution(1041));