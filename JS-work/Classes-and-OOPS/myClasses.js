class user{
    constructor(username, email, password, isLoggedIn){
        this.username = username;
        this.email = email;
        this.password = password
        this.isLoggedIn = isLoggedIn
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const test = new user("Talha", "talha@gmail.com", "123abc", true )
// console.log(test.encryptPassword());
// console.log(test.changeUsername());

// Behind the scene if we dont use class and constructor
function User(username, email, password, isLoggedIn) {
    this.username = username;
    this.email = email;
    this.password = password
    this.isLoggedIn = isLoggedIn
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const test2 = new User("Talha", "talha@gmail.com", "123abc", true )
console.log(test2.encryptPassword())
console.log(test2.changeUsername());




