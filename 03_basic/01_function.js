function calculateCartPrice(...item){
    return item
}
// console.log(calculateCartPrice(2,3));

function getObject(anyObj) {
    return anyObj.name
}

// console.log(getObject({
//     name:'sam',
//     price:999
// }));

console.log(addOne(4)); 
function addOne(num) {
    return num+1
}

addTwo(7) //hoisting concept
const addTwo=function(num){
    return num+1
}