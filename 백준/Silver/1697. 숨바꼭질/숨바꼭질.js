const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);

let visited = Array(100001).fill(0);

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;

  while (queue.length) {
    const current = queue.shift();
    const directions = [current - 1, current + 1, current * 2];
    if (current === K) {
      console.log(visited[current] - 1);
      return;
    }
    for (const next of directions) {
      if (next >= 0 && next <= 100000 && visited[next] === 0) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }
};
bfs(N);
