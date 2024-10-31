const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .split("\n")
  .slice(1);

const map = new Map();
const result = [];

// 문자열 개수 세기
for (const index of input) {
  const trimmedIndex = index.trim(); // 문자열의 앞뒤 공백 제거
  const count = map.get(trimmedIndex) || 0;
  map.set(trimmedIndex, count + 1);
}

// 결과 배열에 각 문자열과 개수 추가
for (const [key, value] of map) {
  if (value > 1) {
    result.push(`${key}`);
  }
}
result.sort();
// 결과 출력
console.log(result.length); // 결과 배열의 길이 출력
for (const item of result) {
  console.log(item); // 각 요소 출력
}
