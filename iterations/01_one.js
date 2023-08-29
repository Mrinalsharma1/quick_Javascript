const arr=[0,2,3,4,5]

//forof loop start from 1
for (const num of arr) {
    // console.log(num);
}

// const greeting="hello world" //print the string character
// for (const greet of greeting) {
//     console.log(greet);
// }

const map=new Map()
map.set("IN","India")
map.set('USA', 'America')
map.set('NP','Nepal')
//in map forin loop will work bcus it store as array
for (const [key,val] of map) {
    // console.log(key,'->',val);
}

//object will work?

const myObj={
    name:'raju',
    roll:65,
    age:76,
    fee:'10K'
}
// for (const [key,val] of myObj) { //TypeError: myObj is not iterable
//     console.log(key,val);
// }

// console.log(typeof myObj);

for (const key in myObj) {
    console.log(`${key} -> ${myObj[key]}`);
}

//for in will not applicable on map

