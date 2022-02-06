const client = {
    name: 'masai',
    password: 'admin@123',
    hostname: 'masaischool',
    client: 'chrome'
}

let {name,password} = client;
console.log(name);
console.log(password);

const obj2 = {
    name: 'masai',
    address: {
        pincode: 560095
    }
}

let {address: {pincode : pin},address} = obj2;
console.log(pin)
console.log(address)

const arr = [100, 200, 500, 600];

const [x, y] = arr;

console.log(x)
console.log(y)

const arr1 = [ 100, [  50, 60, 70  ]   ] ;

const [x,y] = arr1;
const [val] = y;
console.log(val);

// const arr2 = [  1, {  
//     arr: [ 1, 2, 3 ]
//   }
// ] 

// const [val1,val2:{,x,y}] = arr2;
// console.log(val2);