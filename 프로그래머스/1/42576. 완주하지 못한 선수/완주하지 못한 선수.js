function solution(participant, completion) {
    let hashMap = new Map();
    
    for(let people of participant){
        hashMap.has(people) ? hashMap.set(people, hashMap.get(people) + 1) : hashMap.set(people, 1);
    }
    
    for(let people of completion){
        hashMap.has(people) && hashMap.set(people, hashMap.get(people) - 1)
    }
    
    for(let [key, value] of hashMap){
        if(value === 1) return key;
    }
}
