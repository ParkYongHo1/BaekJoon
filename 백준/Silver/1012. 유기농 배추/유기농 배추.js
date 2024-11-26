const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");

const T = Number(input.shift());

const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (start) => {
  const queue = [start];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x < 0 || x >= N || y < 0 || y >= M) continue;
    if (map[x][y] === 0) continue;
    else map[x][y] = 0;
    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 1) {
        queue.push([nx, ny]);
      }
    }
  }
};

for (let i = 0; i < T; i++) {
  let worm = 0;
  var [M, N, K] = input.shift().split(" ").map(Number);
  var map = Array.from(Array(N), () => new Array(M).fill(0));
  for (let j = 0; j < K; j++) {
    const xy = input.shift().split(" ").map(Number);
    map[xy[1]][xy[0]] = 1;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j]) {
        bfs([i, j]);
        worm++;
      }
    }
  }
  console.log(worm);
}
