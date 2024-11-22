const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");
const N = Number(input.shift());

const graph = input.map((v) => v.split("").map(Number));
const answer = [];
const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const isValid = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < N && graph[x][y];
};
const bfs = (start) => {
  const queue = [start];
  let cnt = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    cnt++;
    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;
      if (!isValid(nx, ny)) continue;
      graph[nx][ny] = 0;
      queue.push([nx, ny]);
    }
  }
  return cnt;
};
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j]) {
      graph[i][j] = 0;
      answer.push(bfs([i, j]));
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
