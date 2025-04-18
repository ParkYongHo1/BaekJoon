function solution(arr, divisor) {
    let answer = arr.filter((i)=> i % divisor === 0)
    if(answer.length === 0){
        answer.push(-1);
    } 
    return  answer.sort((a,b) => a-b);
}