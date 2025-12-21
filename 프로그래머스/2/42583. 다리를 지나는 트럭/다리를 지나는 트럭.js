function solution(bridge_length, weight, truck_weights) {
    let queue = new Array(bridge_length).fill(0);
    let currentWeight = 0;
    let time =0;
    while(truck_weights.length || currentWeight> 0){
        time++;
        currentWeight -= queue.shift();
        
        if(truck_weights.length && currentWeight + truck_weights[0] <= weight){
            const truck = truck_weights.shift()
            queue.push(truck);
            currentWeight += truck;
        }else{
            queue.push(0);
        }
    }
    return time;
}