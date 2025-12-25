function solution(jobs) {
    jobs.sort((a,b) => a[0] - b[0]);
    const heap = [];
    let idx = 0;
    let time = 0;
    let total = 0;
    const pushHeap = (num)=> {
        heap.push(num);
        let i = heap.length - 1;
        while(i > 0){
            let parent = Math.floor((i - 1) / 2);
            if(heap[parent][1] <= heap[i][1]) break;
            [heap[parent],heap[i]] = [heap[i],heap[parent]];
            i = parent;
        }
    }
    const popHeap = () => {
        let min = heap[0];
        const last = heap.pop();
        if(heap.length > 0){
            heap[0] = last;
            let i = 0;
            while(1){
                let left = (i*2)+1, right = (i*2)+2, smallest = i;
                if(left < heap.length && heap[left][1] < heap[smallest][1])  smallest = left;
                if(right < heap.length && heap[right][1] < heap[smallest][1])  smallest = right;
                if(smallest === i) break;
                [heap[i],heap[smallest]] = [heap[smallest],heap[i]]
                i = smallest;
            }
        }
        return min;
    }
    
    while(idx < jobs.length || heap.length > 0){
        while(idx < jobs.length && jobs[idx][0] <= time){
            pushHeap(jobs[idx]);
            idx++
        }
        
        if(heap.length === 0){
            time = jobs[idx][0];
            continue;
        }
        
        const [start, duration] = popHeap();
        time += duration;
        total +=  time - start
    }
    return Math.floor(total / jobs.length)
}
