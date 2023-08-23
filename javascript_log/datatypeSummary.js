// Primitive and non-premitive

//  7 types -> String, Number, Boolean, Null, undefine, Symbole, BigInt

let id=Symbol('123')
let newId=Symbol('123')
console.table([id,newId]) //index 0,1
console.log(id===newId); //false


let myObj={
    name:'raju',
    roll:11,
    nestObj:{
        newName:"kumar",
        sallary:3400
    }
}
console.log(myObj.nestObj.newName);
