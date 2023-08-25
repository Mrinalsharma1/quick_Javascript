// const tinderUser=new Object()
const tinderUser={}
tinderUser.id="yyewy"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

//Add two object

const obj1={1:"a",2:'b'}
const obj2={3:'c',4:'d'}

// const obj3={obj1,obj2} get nested object

const obj3=Object.assign(obj1,obj2) //get added object
// console.log(obj3);

const obj4={...obj1,...obj2} //it's also a way
// console.log(obj4);

const temp=[
    {
        id:1,
        name:'raj'
    },
    {
        id:2,
        name:'mohan'
    }
]
// console.log(temp);//all
// console.log(temp[0]); //first object
// console.log(temp[0].name);

// console.log(Object.keys(tinderUser)) //return keys in array form
// console.log(Object.values(tinderUser));//return array

//******************** object destructuring */

const course={
    courseName:'js in hindi',
    teacher:'ht',
    price:'free'
}
const {courseName}=course
console.log(courseName);
const {courseName:a}=course
console.log(a);
