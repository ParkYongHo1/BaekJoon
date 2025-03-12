function solution(n) {
    let mod = 0;
    let answer = 0;
    for(let i =1; i < n; i++){
        mod = n % i;
        if(mod === 1){
            answer = i;
            break;
        }
    }
    return answer;
}