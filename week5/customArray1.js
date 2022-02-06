
function MyArray(){
    Object.defineProperty(this, "length",{
        value:0,
        writable:true,
        enumerable:false,
    })
}
MyArray.prototype.push = function(value){
    this[this.length] = value
    this.length++;
    return this.length;
 }

 MyArray.prototype.reverse = function(){
    var result = new MyArray()
    for(var i = this.length-1; i >=0; i--){
        result.push(this[i])
    }
    return result;
}

MyArray.prototype.firstElem = function(){
    return this[0]
}

var arr = new MyArray();
arr.push(5)
arr.push(10)
arr.push(15)
arr.push(20)
arr.push(25)
console.log(arr,arr.length)
console.log(arr.reverse())

console.log(`The first Element is : ${arr.firstElem()}`)
let res = [];
 for(var key in MyArray){
     console.log(`Key = ${key}, Value = ${MyArray[key]}`)
    res.push(MyArray[key]);
 }

console.log(res);

// let arr = new MyArray(10);
// console.log(arr);