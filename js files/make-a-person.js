var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly

    this.firstName
    this.lastName
    this.fullName

    this.getFirstName = function () {
        this.setFullName(this.fullName)
        return this.firstName
    }
    this.setFirstName = function (newFirstName) {
        this.setFullName(this.fullName)
        this.firstName = newFirstName
        this.fullName = this.firstName + ' ' + this.lastName

    }
    this.getLastName = function () {
        this.setFullName(this.fullName)
        return this.lastName
    }
    this.setLastName = function (newLastName) {
        this.setFullName(this.fullName)
        this.lastName = newLastName
        this.fullName = this.firstName + ' ' + this.lastName
    }
    this.getFullName = function () {
        this.setFullName(this.fullName)
        return this.fullName
    }
    this.setFullName = function (newFullName = firstAndLast) {
        this.fullName = newFullName
        this.firstName = newFullName.split(' ')[0].toString()
        this.lastName = newFullName.split(' ')[1].toString()
    }


    // let fullName = firstAndLast

    // this.getFirstName = function () {
    //     return fullName.split(" ")[0]
    // }

    // this.getLastName = function () {
    //     return fullName.split(" ")[1]
    // }

    // this.getFullName = function () {
    //     return fullName
    // }

    // this.setFirstName = function (name) {
    //     fullName = name + " " + fullName.split(" ")[1]
    // }

    // this.setLastName = function (name) {
    //     fullName = fullName.split(" ")[0] + " " + name
    // }

    // this.setFullName = function (name) {
    //     fullName = name
    // }

}

var bob = new Person('Bob Ross')
// console.log(bob.getFullName())
bob.setFirstName("Haskell")
console.log(bob.getFullName())
bob.setLastName("Curry")
console.log(bob.getFullName())
// bob.setFullName("Haskell Curry")
// console.log(bob.getFullName())



/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/
