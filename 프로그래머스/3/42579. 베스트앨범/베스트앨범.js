function solution(genres, plays) {
  let answer = [];
  let hashMap = genres.reduce((acc, cur, index) => {
    if (!acc[cur]) {
      acc[cur] = { play: plays[index], list: [] };
    } else {
      acc[cur].play += plays[index];
    }
    acc[cur].list.push([index, plays[index]]);
    return acc;
  }, {});
  let sortArr = Object.entries(hashMap).sort((a, b) => b[1].play - a[1].play);
  sortArr.map((item, inex) => {
    item[1].list.sort((a, b) => b[1] - a[1]);
  });

  for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < Math.min(2, sortArr[i][1].list.length); j++) {
      answer.push(sortArr[i][1].list[j][0]);
    }
  }

  return answer;
}
