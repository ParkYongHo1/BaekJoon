const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim();

const answer = (n) => {
  return n % 2 == 0 ? "CY" : "SK";
};

console.log(answer(Number(input)));
