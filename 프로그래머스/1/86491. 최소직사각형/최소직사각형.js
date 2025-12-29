function solution(sizes) {
    let maxW=0;
    let maxH=0;
    for(let size of sizes){
        size.sort((a,b)=> a-b)
    }
    for(let [w,h] of sizes){
        if(w > maxW){
            maxW= w;    
        }
        if(h > maxH){
            maxH = h    
        }
    }
    return maxW * maxH
}

