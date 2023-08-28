const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //return array inside array

// const temp_Heroes=marvel_heros.concat(dc_heros) //now yo can get merged array
// console.log(temp_Heroes);

// const new_all_hero=[...marvel_heros,...dc_heros] //by spread operator we can get
// console.log(new_all_hero);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array.flat(Infinity)); //we can rtuen one array with all value

// console.log(Array.from("mrinal")); //[ 'm', 'r', 'i', 'n', 'a', 'l' ]

let a=10
let b=20
let c=30

console.log(Array.of(a,b,c)); //convert all variable into array
