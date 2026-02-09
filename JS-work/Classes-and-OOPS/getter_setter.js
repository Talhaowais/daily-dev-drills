class User{
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }

    get password(){
        // return this._password.toUpperCase
        return `${this.password1}talha`
    }

    // setters ko kabi return ni krty
    set password(value){
        this.password1 = value
    }
}
const file = new User("talha", "t.gmail.com", "123")
console.log(file.password);
