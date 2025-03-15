function solution(nums) {
  let maxNum = nums.length / 2;
  let setNum = new Set(nums);
  let numArr = Array.from(setNum);
  return maxNum == numArr.length
    ? numArr.length
    : maxNum < numArr.length
    ? maxNum
    : numArr.length
}
