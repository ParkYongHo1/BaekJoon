function solution(s){
    let arr = s.split("")
    let cnt = 0;
    if(arr[0] === ")"){
        return false;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "("){
            cnt += 1;
        }else{
            cnt -= 1;
        }
        if(cnt == -1){
            return false
        }
    }
    if(cnt > 0){
        return false;
    }else{
        return true;
    }

}
