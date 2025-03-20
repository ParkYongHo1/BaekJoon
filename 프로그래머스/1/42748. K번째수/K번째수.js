function solution(array, commands) {
  let sortArr = [];
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);

    sortArr.push(sliceArr);
    sortArr[i].sort((a, b) => a - b);
    answer.push(sortArr[i][commands[i][2] - 1]);
  }
  return answer;
}
