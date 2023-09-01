const myArr=['one','two','three','four','five']

// const demo=myArr.forEach((item)=>{ //means from foreach we can't return value
//     // console.log(item)
//     return item
// })
// console.log(demo);

// const demo=myArr.filter((item)=>(item))
// console.log(demo);

let score=[2,3,4,5,6,7,8]

// const demo=score.filter((item)=>(item>=3))
// console.log(demo);

// const demo=score.filter((item)=>{return item>=3})
// console.log(demo);

// let temp=[] //we can do with fillter as well as foreach loop too
// score.forEach((num)=>{
//     if(num>4){
//         temp.push(num)
//     }
// })
// console.log(temp);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const temp=books.filter((item)=>(item.genre==='History')) //with filter

  let myTemp=[] //with forEach
//   books.forEach((item)=>{
//     if(item.genre==="History"){
//         myTemp.push(item)
//     }
//   })
//   console.log(myTemp);

// myTemp=books.filter((item)=> item.publish>=2010 && item.genre==="Science")
// console.log(myTemp);

// books.forEach((item)=>{
//     if(item.publish>=2009 && item.genre==="Science"){
//         myTemp.push(item)
//     }
// })
// console.log(myTemp);

// ++++++++++++++++++ MAP +++++++++++++++++++++++++++

// myTemp=books.map((item)=>item.title)
// console.log(myTemp);

// myTemp=books.map((item)=>item.publish+10)
//             .map((item)=>item+1)
//             .filter((item)=>item>=2010)

// console.log(myTemp);

score=[2,3,4,5,6,7,8]
// myTemp=score.map((num)=>num*10)
//             .map((num)=>num+1)
//             .filter((num)=>num>50)

// console.log(myTemp);

// ++++++++++++++++++ REDUCER +++++++++++++++++++++++++++
// score=[2,3,4,5]
// myTemp=score.reduce((prev,next)=>prev+next,0)
// console.log(myTemp);

const cartPriceList=[
    {
        course:'java',
        price:1000
    },
    {
        course:'javascript',
        price:2000
    },
    {
        course:'python',
        price:2000
    },
    {
        course:'react',
        price:3000
    },
]
myTemp=cartPriceList.reduce((prev,next)=>prev+next.price,0)
console.log(myTemp);