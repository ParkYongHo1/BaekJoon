function solution(scoville, K) {
    const heap =  scoville.slice();
    heap.sort((a,b) => a-b);
    const pushHeap = (num) =>{
        heap.push(num);
        let i = heap.length -1;
        while(i > 0){
            let parent = Math.floor((i-1)/2);
            if(heap[parent] <= heap[i]) break;
            [heap[parent],heap[i]] = [heap[i],heap[parent]];
            i = parent;
        }
    }
    
    const popHeap = () => {
        if(heap.length === 1) return heap.pop();
        let min = heap[0];
        heap[0] = heap.pop();
        let i = 0;
        while(1){
            let left = (i*2)+1, right = (i*2)+2, smallest = i;
            if(left < heap.length && heap[left] < heap[smallest]) smallest = left;
            if(right < heap.length && heap[right] < heap[smallest]) smallest = right;
            if(smallest === i) break;
            [heap[i],heap[smallest]] = [heap[smallest],heap[i]];
            i = smallest;
        }
        return min
    }
    let cnt = 0;
    while(heap.length > 1 && heap[0] < K){
        let firstNum = popHeap();
        let secondNum = popHeap();
        pushHeap(firstNum + (secondNum * 2));
        cnt++
    }
    return heap[0] >= K ? cnt : -1 
}