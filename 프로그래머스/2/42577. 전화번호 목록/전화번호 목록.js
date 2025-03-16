function solution(phone_book) {
  let hashMap = new Map();
  for(let i = 0; i < phone_book.length; i++){
      hashMap.set(phone_book[i], true);
  }
  for(let i = 0; i < phone_book.length; i++){
      for(let j = 0; j < phone_book[i].length; j++){
          let prefix = phone_book[i].substring(0,j);
          if(hashMap.has(prefix)){
              return false;
          }
      }
  }
  return true;
}