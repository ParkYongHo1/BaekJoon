const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = [...Array(N + 1)].map(() => []);

for (let i = 0; i < M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
const dfs = (start) => {
  const stack = [start];
  const visited = [...Array(N + 1)].map(() => false);
  answer = [];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      answer.push(node);
      stack.push(...graph[node]);
    }
  }
  return answer;
};
const bfs = (start) => {
  const queue = [start];
  const visited = [...Array(N + 1)].map(() => false);
  answer = [];
  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      answer.push(node);
      queue.push(...graph[node]);
    }
  }
  return answer;
};
graph.forEach((v) => v.sort((a, b) => b - a));
console.log(dfs(V).join(" "));
graph.forEach((v) => v.sort((a, b) => a - b));
console.log(bfs(V).join(" "));
