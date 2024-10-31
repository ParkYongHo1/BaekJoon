const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim("");

const set = new Set();
const strArray = input;

for (let i = 0; i < strArray.length; i++) {
  for (let j = 0; j < strArray.length; j++) {
    set.add(strArray.substring(i, j + 1));
  }
}

console.log(set.size - 1);
