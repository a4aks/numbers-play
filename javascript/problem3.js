
let str = ["Ashish","Kriti","sumit","saurav","ruchi"];

const res = str.reduce((count,curr) => {
    if(curr.length % 2 !== 0 ){
        count = count + curr.length;
    }
    return count;
},0)
console.log(res);

