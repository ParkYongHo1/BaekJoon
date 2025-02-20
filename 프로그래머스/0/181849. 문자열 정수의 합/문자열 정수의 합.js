function solution(num_str) {
    let answer = 0
    num_str.split("").map((index)=>{
        answer += Number(index)  
    })
    return answer;
}