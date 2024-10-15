const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const numArray = input[1];

let count = 0;
numArray.map((e) => {
  if (e == input[2][0]) {
    count += 1;
  }
});
console.log(count);
