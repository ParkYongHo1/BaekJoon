function solution(arr) {
    let answer = 0;
    arr.map((i)=>{
        answer += i
    })
    return answer / arr.length;
}