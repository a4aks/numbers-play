let arr = [3,12,23,34,45];

const res = arr.reduce((sum,curr) =>{
      if(curr % 3 === 0 ){
          sum = sum + curr*curr*curr;
      }
      return sum;
},0)

console.log(res);