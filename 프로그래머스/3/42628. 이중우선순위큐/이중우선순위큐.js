function solution(operations) {
    let arr =[]
    for(let item of operations){
        const [cmd, num] = item.split(" ");
        if(cmd === "I"){
            arr.push(num);
            arr.sort((a,b) => b-a);
        }else{
            if(num === "1"){
                arr.shift();
            }else{
                arr.pop()
            }
        }
    }
    return arr.length === 0 ? [0,0] : [Number(arr[0]) , Number(arr[arr.length-1])]
}