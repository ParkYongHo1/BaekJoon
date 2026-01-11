function solution(word) {
    let wordArr = ['A','E','I','O','U'];
    let wordDict = [];
    const dfs = (current) => {
        if(current.length > 5) return;
        if(current.length > 0){
            wordDict.push(current)
        }
        for(let i = 0; i < wordArr.length; i++){
            dfs(current + wordArr[i])
        }
    }
    
    dfs("");
    
    return wordDict.indexOf(word) + 1
}