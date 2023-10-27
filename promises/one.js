const promisOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('promiseone invoked');
        resolve()
    },1000)
})
promisOne.then(function(){
    console.log('promise resolved');
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promiseone invoked second');
        resolve()
    },1000)
}).then(()=>{
    console.log('promise resolved second');
})

const promistwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'mrinal',email:'abc@gmail.com'})
        }else{
            reject({error:'Something went wrong'})
        }
    },1000)
})
promistwo.then((value)=>{
    console.log(value)
    return value.username;
}).then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error)
}).finally(()=>console.log('promise is resolved or rejected'))

const promisthree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:'javascript',email:'abc@gmail.com'})
        }else{
            reject({error:'Js went wrong'})
        }
    },1000)
})
async function consumenprommisefive(){
    try {
        const res=await promisthree;
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
consumenprommisefive()

// async function callapi(){
//     try {
//         const resp=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(resp)
//         const data=await resp.json();
//         // console.log(data)

//     } catch (error) {
//         console.log(error)
//     }
// }
// callapi()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log("update",data)
})
.catch((Error)=>console.log(Error))