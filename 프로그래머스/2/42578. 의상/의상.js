function solution(clothes) {
    let hashMap = new Map();
    let answer = 1;
    
    clothes.forEach((item)=>{
        hashMap.set(item[1], (hashMap.get(item[1]) || 0 ) + 1);    
    })
    
    for(let item of hashMap.values()){
        answer *= (item + 1)
    }
    
    return answer - 1;
}
