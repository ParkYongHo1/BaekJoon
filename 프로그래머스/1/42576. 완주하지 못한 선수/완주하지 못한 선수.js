function solution(participant, completion) {
  let hashMap = new Map();

  for (let i = 0; i < completion.length; i++) {
    hashMap.set(completion[i], (hashMap.get(completion[i]) || 0) + 1);
  }
  for (let i = 0; i < participant.length; i++) {
    if (hashMap.has(participant[i])) {
      hashMap.set(participant[i], hashMap.get(participant[i]) - 1);
      if (hashMap.get(participant[i]) === 0) {
        hashMap.delete(participant[i]);
      }
    } else {
      return participant[i];
    }
  }
}
