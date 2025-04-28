function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
        if(sizes[i][0] > maxWidth) maxWidth = sizes[i][0]
        if(sizes[i][1] > maxHeight) maxHeight = sizes[i][1]
    }
    return maxWidth * maxHeight
}

