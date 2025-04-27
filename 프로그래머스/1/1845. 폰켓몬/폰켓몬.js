function solution(nums) {
    let maxNum = nums.length / 2;
    
    let hashSet = new Set(nums);
    let answer = hashSet.size >= maxNum ?  maxNum :  hashSet.size;
    
    return answer
}
