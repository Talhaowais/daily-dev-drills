function User(username, email, isLoggedIn){
    this.userName = username;
    this.email = email;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Talha", "talhaowais345@gmail.com", false)
const userTwo = new User("Butt", "butt@gmail.com", true)
console.log(userOne);
console.log(userTwo);


