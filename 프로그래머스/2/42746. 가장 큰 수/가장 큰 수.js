function solution(numbers) {
  let answer = String(Array.from(String(numbers).split(",")).sort((a,b) => (b+a) - (a+b)).join(""))
  return answer[0] === "0" ? "0" : answer
}
