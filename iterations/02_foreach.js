// forEach loop contains call back

const myArr=['Ind','Nep','Pok','Usa','UK']
//first way to iterate
myArr.forEach(function (item){
    // console.log(item);
})

// second way to iterate
myArr.forEach((val)=>{
    // console.log(val);
})
//apart from that we can access many more thing
myArr.forEach((val,index,arr)=>{
    // console.log(`${val} ${index} ${arr}`); //Op Ind 0 Ind,Nep,Pok,Usa,UK
})

//print object through forEach loop
const myData=[
    {
        languageName:'java',
        Filename:'java'
    },
    {
        languageName:'javascript',
        Filename:'js'
    },
    {
        languageName:'python',
        Filename:'py'
    },
]

myData.forEach((item)=>{
    console.log(item.languageName);
})
