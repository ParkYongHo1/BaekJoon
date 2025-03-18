function solution(progresses, speeds) {
  let answer = [];
  let dateArr = [];
  let cnt = 1;

  for (let i = 0; i < progresses.length; i++) {
    let date = 0;
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      date += 1;
    }
    dateArr.push(date);
  }
  let flag = dateArr[0];
  for (let i = 1; i < dateArr.length; i++) {
    if (dateArr[i] > flag) {
      answer.push(cnt);
      cnt = 1;
      flag = dateArr[i];
    } else {
      cnt += 1;
    }
  }

  answer.push(cnt);
  return answer;
}
