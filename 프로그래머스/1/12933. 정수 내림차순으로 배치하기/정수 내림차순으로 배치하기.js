function solution(n) {
    let answer = String(n).split('').map(Number).sort((a,b)=>a-b).reverse().join("")
    return Number(answer);
}
solution(118372)