function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const graph = Array.from(Array(n+1) ,()=>[]);
    for(let wire of wires){
        const [from,to] = wire;
        graph[from].push(to);
        graph[to].push(from);
    }
    function bfs(start,except){
        let count = 0;
        let queue = [start];
        const visited = Array.from(Array(n+1), ()=> false);
         visited[start] = true;
        while (queue.length) {
            const index = queue.shift();
            graph[index].forEach((element) => {
                if (element !== except && !visited[element]) { 
                    visited[element] = true;
                    queue.push(element);
                }
            });
            count++;
        }
        return count;
    }
    wires.forEach((element)=>{
        const [from,to] = element;
        answer = Math.min(answer, Math.abs(bfs(from,to)-bfs(to,from)))
    })
    return answer;
}