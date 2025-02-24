function solution(answers) {
    let result = [];
    const first = [1,2,3,4,5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const firstFilter = answers.filter((answer,index) => answer === first[index % first.length]).length;
    const secondFilter = answers.filter((answer,index) => answer === second[index % second.length]).length;
    const thirdFilter = answers.filter((answer,index) => answer === third[index % third.length]).length;
    const max = Math.max(firstFilter,secondFilter,thirdFilter);
    
    if(max === firstFilter) result.push(1);
    if(max === secondFilter) result.push(2);
    if(max === thirdFilter) result.push(3);
    
    return result;
}