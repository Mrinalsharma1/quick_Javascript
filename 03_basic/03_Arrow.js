const user={
    userName:'mrinal',
    age:23,
    course:function(){
        console.log(this.userName); //it's for local references
        console.log(this);
    }
}
// user.course()
// user.userName="raju"
// user.course()

// console.log(this);

// function demo() { 
//     let chai="ready"
//     console.log(this.ready);//we can only use this inside function not in function
// }
// demo()

// const demo = () =>{
//     console.log(this) //here also {}
// }
// demo()

const addNum = (a,b)=> (a+b) // () means no return required
console.log(addNum(4,5));

const addTwo=(a,b)=>{return a+b} // {} means you have to write return
console.log(addTwo(1,5));
