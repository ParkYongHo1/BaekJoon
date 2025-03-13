function solution(s){
    let answerArr = s.toUpperCase().split("").filter((str)=> str === "P" || str === "Y");
    let pCnt = 0;
    let yCnt = 0;
    answerArr.map((item)=>{
        if(item === "P"){
            pCnt += 1;
        }else{
            yCnt += 1;
        }
    })
    if(!pCnt && !yCnt) return true
    
    return pCnt === yCnt ? true : false
}
console.log("pPoooyY")