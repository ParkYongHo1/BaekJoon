const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const aArray = new Set(input[1]);
const bArray = new Set(input[2]);
const result = new Set([...aArray, ...bArray]);
aArray.forEach((index) => {
  if (bArray.has(index)) {
    result.delete(index);
  }
});
console.log(result.size);
