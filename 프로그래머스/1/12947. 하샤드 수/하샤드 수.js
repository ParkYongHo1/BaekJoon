function solution(x) {
    
    let str = x.toString().split("");
    let sum = str.reduce((acc, item) => acc + Number(item), 0);
    
    return x % sum === 0 ? true : false;
}
solution(10)