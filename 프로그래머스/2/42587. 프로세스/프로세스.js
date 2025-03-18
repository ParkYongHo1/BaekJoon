function solution(priorities, location) {
  let locationArr = [];
  let answer = 0;
  for (let i = 0; i < priorities.length; i++) {
    locationArr.push(i);
  }
  while (priorities.length > 0) {
    let maxNum = Math.max(...priorities);
    let current = priorities.shift();
    let currentLocation = locationArr.shift();
    if (current < maxNum) {
      priorities.push(current);
      locationArr.push(currentLocation);
    } else {
      answer += 1;
      if (currentLocation === location) {
        return answer;
      }
    }
  }
  return answer;
}

