function solution(n) {
    let flag = false;
    for(let i = 0; i <= n; i++){
        if(n === i**2){
           flag = true;
           return (i + 1)**2
        }
    }
    return -1;
}