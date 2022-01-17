function sleep(delay){
    return new Promise ((resolve,reject) =>{
        if(typeof delay === 'number'){
            setTimeout(() =>{
                resolve({success: true, message:'success'})
            },delay)
        }
        else{
            reject({success:false,message:'failure, invalid arguments'})
        }
    })
}
sleep(3000)
.then(res => console.log(res))
.catch(err => console.log(err));