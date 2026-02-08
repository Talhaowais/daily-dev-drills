class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new teacher was added by ${this.username}`);
        
    }
}
const ok = new Teacher("Talha", "talhaowais345@gmail.com", "Test123")
console.log(ok);
ok.addCourse()
