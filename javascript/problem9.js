
var arr = ['I','got','intern','at','geeksforgeeks'];

const res = arr.reduce((sum,curr) =>{
    sum  = sum + "_"+curr;
    return sum;
},);

console.log(res);