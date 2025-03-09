function dfs(i, computers, visited) {
  visited[i] = true;
  for (let j = 0; j < computers[i].length; j++) {
    if (computers[i][j] === 1 && !visited[j]) {
      dfs(j, computers, visited);
    }
  }
}
function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, computers, visited);
      answer++;
    }
  }
  return answer;
}
