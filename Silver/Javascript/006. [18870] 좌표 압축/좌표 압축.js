const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
const N = input[0];
const array = input[1];
const newArray = [];
const setArray = new Set(array);
const answerArray = [];
setArray.forEach((e) => {
  newArray.push(e);
});
newArray.sort((a, b) => a - b);

for (let i = 0; i < array.length; i++) {
  let start = 0;
  let end = newArray.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[i] === newArray[mid]) {
      answerArray.push(mid);
      break;
    } else if (array[i] > newArray[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(answerArray.join(" "));
