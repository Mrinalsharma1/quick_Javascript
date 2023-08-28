// immediately invoked function expressions (IIFE)

(function check() {
    console.log(`welcome to iife`);
}()); //to write two iife function you have to terminate by semicolon;

((name)=>{
    console.log(`welcome to iife ${name}`);
})('mrinal')