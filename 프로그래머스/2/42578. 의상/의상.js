function solution(clothes) {
    let hashMap = new Map();
    let answer = 1;
    for(let i = 0; i < clothes.length; i++){
        hashMap.set(clothes[i][1], (hashMap.get(clothes[i][1]) || 0) + 1);
    }
    for(let item of hashMap.values()){
        answer *= (item + 1);
    }
    return answer - 1;
}
