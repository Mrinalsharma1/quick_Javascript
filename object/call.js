function Setusername(username) {
    this.username=username
    // console.log('hdh')
}
function createUser(username,email,password) {
    Setusername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser('hari','hari@gmail.com','233')
console.log(chai)