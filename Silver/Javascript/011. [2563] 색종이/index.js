const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const arr = Array.from(Array(100), () => Array(100).fill(0));
const cased = input[0][0];

let count = 0;
for (let i = 1; i <= cased; i++) {
  // i = 1부터 시작
  let startX = input[i][0]; // input[x][0]에서 x는 케이스 인덱스
  let startY = input[i][1];

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (arr[startX + j] && arr[startX + j][startY + k] === 0) {
        // 유효한 인덱스 체크
        arr[startX + j][startY + k] = 1;
        count++;
      }
    }
  }
}
console.log(count);
