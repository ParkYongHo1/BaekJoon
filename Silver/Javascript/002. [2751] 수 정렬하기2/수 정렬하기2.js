const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");
const numArray = input.slice(1).map(Number);
numArray.sort((a, b) => a - b);
console.log(numArray.join("\n"));

/*  numArray.map((e)=>{
      console.log(e);
    })  로 출력 시 시간초과 에러남 -> join()메서드 사용해서 하나의 문자열로 만든후 출력하기
*/
