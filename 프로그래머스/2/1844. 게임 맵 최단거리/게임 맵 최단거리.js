function solution(maps) {
    let N = maps[0].length;
    let M = maps.length;
    const checkArray = Array.from({ length : M }, () => Array(N).fill(0));

    function bfs(row,col){
        const dx = [-1,0,0,1];
        const dy = [0,1,-1,0];
        const queue = [];
        queue.push([row, col]);
        checkArray[row][col] = 1;
        while(queue.length){
            const [x , y] = queue.shift();
           
            for(let i=0; i < 4; i++){
                const [nx, ny] = [x + dx[i], y + dy[i]];
                if((nx >= 0 && ny >= 0 && nx < M && ny < N ) && maps[nx][ny] && !checkArray[nx][ny]){
                    checkArray[nx][ny] = checkArray[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
  
    }
   bfs(0,0);
   return  checkArray[M -1][N -1] === 0 ? -1 : checkArray[M -1][N -1]
}
