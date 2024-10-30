const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const nArray = input[3]; // nArray는 4번째 줄의 배열
const mArray = input[1]; // mArray는 2번째 줄의 배열
const result = [];
const countMap = new Map();
for (const num of mArray) {
  countMap.set(num, (countMap.get(num) || 0) + 1);
}
for (const num of nArray) {
  result.push(countMap.get(num) || 0);
}
console.log(result.join(" ")); // 결과 출력
