function solution(arr1, arr2) {
    let sumArr1 = 0;
    let sumArr2 = 0;
    arr1.map((i)=>{sumArr1+=i})
    arr2.map((i)=>{sumArr2+=i})
    
    if(arr1.length > arr2.length){
        return 1
    }
    else if(arr1.length === arr2.length){
        if(sumArr1 > sumArr2){
            return 1
        }
        else if(sumArr1 === sumArr2){
            return 0
        }
        else{
            return -1;
        }
    }
    else{
        return -1
    }
}