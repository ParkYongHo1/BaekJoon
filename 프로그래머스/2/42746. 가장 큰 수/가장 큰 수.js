function solution(numbers) {
    let strArr = numbers.map((number)=>number.toString())

    let answer = strArr.sort((a,b) => (b + a) - (a + b)).join('')

    return answer[0] === "0" ? "0" : answer ;
}
