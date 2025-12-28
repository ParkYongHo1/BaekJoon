function solution(array, commands) {
    let answerArr = [];
    for(let command of commands){
        answerArr.push(array.slice(command[0] - 1,command[1]).sort((a,b) => a- b)[[command[2]-1]]);
    }
    return  answerArr
}
