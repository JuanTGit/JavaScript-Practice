console.log('Hello from js')

// variable declaration
var myName = 'Juan';
console.log(myName)

var list = ['name', 2, 3, 4, 5]
console.log(list)
console.log(typeof(list))

var Juan = {
    firstName : 'Juan',
    lastName : 'Tejeda',
    age : 27,
    location : 'Houston, TX',
    languages: ['Python', 'JavaScript']
}
console.log(Juan)
console.log(typeof(Juan))
console.log(Juan.age)
console.log(Juan['firstName'])
console.log(`${Juan.firstName} knows less about ${Juan.languages[1]}`)


let ageGroup = 2

if (ageGroup > 45){
    console.log('senior')
} else if (ageGroup > 18){
    console.log('Adult')
} else {
    console.log('Child')
}
console.clear()

let newAgeGroup = (ageGroup > 18) ? 'Adult' : 'Child'
console.log(newAgeGroup)
let childAgeGroup = (ageGroup > 65) ? 'Senior' : (ageGroup > 18) ? 'Adult' : 'Child'
console.log(childAgeGroup)


// for, for...of, for...in, while, do while

for (let i = 0; i <= 10; i+=2){
    console.log(i)
}

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Pluto']

for (let p of planets){
    // First planet
    // console.log(planets[0])
    console.log(p);
    // First letter by index 0
    // console.log(p[0])
}

for (let p of planets){
    if (p == 'Earth'){
        console.log(`${p} Nice place to live`)
    } else {
        console.log("Uninhabitable")
    }
}

function addNums(num1, num2){
    return num1 + num2
}

console.log(addNums(4, 4));