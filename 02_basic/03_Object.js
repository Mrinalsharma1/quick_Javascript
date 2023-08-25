//object literals

const mySym=Symbol("key01")

const jsUser={
    name:'raju',
    "full Name":"dada",
    age:18,
    [mySym]:"mykey1",
    location:"bihar",
    email:"a@g.com",
    isLoogedIn:false,
    lastLoogedIn:["monday","friday"]
}
// console.log(jsUser.email); //first way
// console.log(jsUser["email"]);//second way
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser.mySym);

jsUser.email="demo@gmao.com"
// console.log(jsUser);
// Object.freeze(jsUser) //after that can't change

// jsUser.email="deth@hao.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log(`hey i am here ${this.email}`);
}

console.log(jsUser.greeting());


