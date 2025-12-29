
const isPrime = (num) =>{
    if(num < 2) return false;
    for(let i = 2; i * i <= num; i++){
        if(num % i === 0) return false
    }
    return true
}
function solution(numbers){
    const arr = numbers.split("");
    const set = new Set();
    
    const dfs = (path,used) => {
        
        if(path.length > 0){
            set.add(Number(path.join("")))
        }
        
        for(let i = 0; i < numbers.length; i++){
            if(used[i]) continue;
            
            used[i] = true;
            path.push(arr[i]);
            
            dfs(path,used);
            
            path.pop();
            used[i] = false;
        }
    }
    dfs([],Array(numbers.length).fill(false));
    let count = 0;
    for(let num of set){
        if(isPrime(num)) count++;
    }
    return count
}