//there are two types of memory
// Stack(Premetive)
//Heap(Non-Premetive) references

// stack
let name="demo"
let newName=name
newName="ht"

// console.log(newName); // due to stack
// console.log(newName);

let userOne={
    name:'test1',
    id:'01'
}
let userTwo=userOne

console.log(userOne);//{ name: 'test1', id: '01' }
console.log(userTwo);//{ name: 'test1', id: '01' }

userTwo.name="sagar"

console.log(userOne);//{ name: 'sagar', id: '01' } due to heap memory bcus it's references
console.log(userTwo);//{ name: 'sagar', id: '01' }

// few maths functions




