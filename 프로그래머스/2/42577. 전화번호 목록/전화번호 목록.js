function solution(phone_book) {
    let hashMap = new Map();
    for(let number of phone_book){
        hashMap.set(number,number);
    }
    for(let i = 0; i < phone_book.length; i++){
        for(let j = 0; j < phone_book[i].length; j++){
            let subStr = phone_book[i].substr(0,j);
            if(hashMap.has(subStr)){
                return false;
            }
        }
    }
    return true;
}