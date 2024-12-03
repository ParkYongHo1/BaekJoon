const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../input.txt")
  .toString()
  .split("\n");

const N = Number(input.shift());

const graph = [...Array(N + 1)].map(() => []);

const visited = Array(N + 1).fill(false);
const parent = Array(N + 1).fill(0);
for (let i = 0; i < N - 1; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}


const dfs = (start) => {
  const stack = [start];

  while (stack.length) {
    const node = stack.pop();
    for (const index of graph[node]) {
      if (!visited[index]) {
        visited[index] = true;
        parent[index] = node;
        stack.push(index);
      }
    }
  }
};
dfs(1);
for (let i = 2; i < parent.length; i++) {
  console.log(parent[i]);
}
