function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!numbers.includes(arr[i])) {
      sum += arr[i];
    }
  }

  return sum;
}
