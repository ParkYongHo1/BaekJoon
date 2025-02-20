function solution(num_list) {
    let array = num_list.sort((a , b) => a - b)
    return array.slice(0,5);
}