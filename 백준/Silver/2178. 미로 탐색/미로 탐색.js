const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(0));
const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const isValid = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < M;
};
const queue = [[0, 0]];
visited[0][0] = 1;
while (queue.length) {
  const [x, y] = queue.shift();
  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;
    if (!isValid(nx, ny)) continue;
    if (!graph[nx][ny] || visited[nx][ny]) continue;
    visited[nx][ny] = visited[x][y] + 1;
    queue.push([nx, ny]);
  }
}
console.log(visited[N - 1][M - 1]);
