const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");

while (input.length > 1) {
  const [w, h] = input.shift().split(" ").map(Number);
  if (w === 0 && h === 0) {
    break;
  }
  let temp = h;
  const graph = [];
  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  while (temp > 0) {
    graph.push(input.shift().split(" ").map(Number));
    temp--;
  }
  let count = 0;
  const directions = [
    [0, 1],
    [-1, 0],
    [1, 0],
    [0, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const bfs = (start) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < directions.length; i++) {
        const [nextX, nextY] = [x + directions[i][0], y + directions[i][1]];
        if (
          nextX >= 0 &&
          nextY >= 0 &&
          nextX < h &&
          nextY < w &&
          !visited[nextX][nextY] &&
          graph[nextX][nextY] === 1
        ) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY]);
        }
      }
    }
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        bfs([i, j]);
        count++;
      }
    }
  }
  console.log(count);
}
