function solution(arr, n) {
    let result = [];
    arr.map((value,index)=>{
        arr.length % 2 === 0 
        ? (index % 2 !== 0 ? result.push(value + n) : result.push(value))
        : (index % 2 == 0 ? result.push(value + n) : result.push(value)) 
    })
    return result;
}
