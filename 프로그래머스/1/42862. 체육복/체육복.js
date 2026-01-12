function solution(n, lost, reserve) {
    let filterLost = lost.filter(e => !reserve.includes(e)).sort((a,b) => a - b);
    let filterReserve = reserve.filter(e => !lost.includes(e)).sort((a,b) => a - b);
    let answer = n - filterLost.length;

    for(let ele of filterLost){
        let pre = filterReserve.indexOf(ele - 1);
        if(pre !== -1){
            filterReserve.splice(pre, 1);
            answer++;
        } else {
            let next = filterReserve.indexOf(ele + 1);
            if(next !== -1){
                filterReserve.splice(next, 1);
                answer++;
            }
        }
    }
    return answer;
}