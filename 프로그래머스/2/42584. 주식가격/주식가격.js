function solution(prices) {
    let answer = [];
    
    for(let i =0; i<prices.length; i++){
        let cnt = 0;
        for(let j= i + 1; j< prices.length; j++){
            cnt++
            if(prices[j] < prices[i]) break
        }
        answer.push(cnt)
        
    }
    return answer;
}