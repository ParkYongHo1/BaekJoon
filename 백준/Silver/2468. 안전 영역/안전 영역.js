const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");

const N = Number(input.shift());
const graph = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  const edges = input[i].trim().split(" ").map(Number);
  graph[i] = edges;
}

let maxAreaCount = 0;

const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (start, waterLevel, visited) => {
  const queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        graph[nx][ny] > waterLevel &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

for (let waterLevel = 0; waterLevel <= 100; waterLevel++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let areaCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] > waterLevel && !visited[i][j]) {
        bfs([i, j], waterLevel, visited);
        areaCount++;
      }
    }
  }

  maxAreaCount = Math.max(maxAreaCount, areaCount);
}

console.log(maxAreaCount);
