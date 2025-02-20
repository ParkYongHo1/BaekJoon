function solution(num_list) {
    let odd_list = "";
    let even_list = "";
    num_list.map((index)=>{
      if(index % 2 !== 0){
          odd_list += index;
      }else{
          even_list += index;
      }
    })
    return Number(odd_list) + Number(even_list);
}
