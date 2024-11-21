const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");

const N = Number(input.shift());
const V = Number(input.shift());

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < V; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const dfs = (start) => {
  const stack = [start];
  const visited = [...Array(N)].map(() => false);
  answer = [];
  while (stack.length) {
    const node = stack.pop();
    if (visited[node]) continue;
    visited[node] = true;
    answer.push(node);
    stack.push(...graph[node]);
  }
  return answer;
};
graph.forEach((v) => v.sort((a, b) => b - a));
console.log(dfs(1).length - 1);
