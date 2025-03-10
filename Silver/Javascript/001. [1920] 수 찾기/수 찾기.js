const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const Narray = input[1].sort((a, b) => a - b);
const Marray = input[3];
for (let i = 0; i < Marray.length; i++) {
  let start = 0;
  let end = Narray.length - 1;
  let flag = false;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (Marray[i] == Narray[mid]) {
      flag = true;
      break;
    } else if (Marray[i] > Narray[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(flag ? 1 : 0);
}
