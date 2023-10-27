const product={
    name:'mobile',
    price:6700,
    rating:4
}
delete product.rating
product.rating=4
// product.value="4"
console.log( product)

// ************** shallow copy ***********************
// const newPro=product
// console.log("first",product);
// product.name="iphone"
// console.log("fir",product); //shallow copy
// console.log("sec",newPro);

// *************** deep copy *********************

// const newcart=JSON.parse(JSON.stringify(product))
// newcart.name="iphone"
// console.log("first",product);
// console.log(newcart);

// const product={
//     name:'mobile',
//     price:6700,
//     rating:4
// }

// let domItem=document.getElementById('item');
// product.map((item)=>{
//     return console.log(item)
// })
// for (const key in product) {
//     console.log(`key is ${key} -> ${product[key]}`);
    
// }
// product.forEach((item) => {
//     console.log(item.name)
//     console.log(item.price);
// });

// console.log(JSON.parse(JSON.stringify(product)))
// const myData=[
//     {
//         languageName:'java',
//         Filename:'java'
//     },
//     {
//         languageName:'javascript',
//         Filename:'js'
//     },
//     {
//         languageName:'python',
//         Filename:'py'
//     },
// ]
// console.log(myData);
// myData.forEach((item)=>{
//     console.log();
//     console.log(`${item.Filename} -> ${item.languageName}`);
// })

const myobj={
    name:"mrinal",
    rool:56
}

Object.keys(myobj).forEach((item)=>{
    console.log(`${item} -> ${myobj[item]}`)
})