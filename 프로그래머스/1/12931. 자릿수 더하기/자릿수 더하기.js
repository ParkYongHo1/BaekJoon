function solution(n)
{
    let answer = 0;
    let array = String(n).split('')
    for(let i = 0; i < array.length; i++){
        answer += Number(array[i])
    }
    return answer;
}
