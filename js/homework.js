// console.log('Test');

//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // create the printInfo method
    printInfo(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
    // Create another method for the addAge method
    addAge(){
        this.age += 1
        console.log(`Happy birthday ${this.name}! You're now ${this.age}.`);
    }
}

const dwight = new Person('Dwight', 32)
const angela = new Person('Angela', 34)

dwight.addAge()
dwight.addAge()
dwight.addAge()
console.log(dwight.printInfo())
console.log(angela.printInfo())



console.clear()

//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for (let i=0; i<arr.length; i++){
        if (i%2 == 0){
            arr.splice(i, 1, 'even index')
        }
    } return arr
}

console.log(replaceEvens(arr))

// Using splice

let evensReplace = arr => {
    for (let i=0; i<arr.length; i++){
        if (i%2 == 0){
            arr.splice(i, 1, 'even index')
        }
    } return arr
}

console.log(evensReplace(arr))

// Using map

let mapReplace = arr => arr.map((value, index) => index % 2 == 0 ? 'even index': value);

console.log(mapReplace(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


