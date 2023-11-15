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

console.clear()

//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

function firstNonConsecutive(arr){
    for (let i = 1; i < arr.length; i++){
        if (arr[i] != arr[i-1]+1){
            return i;
        }
    } return -1
}

//Call function here with arguments
console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7])) // Should log out 3



//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

// Write arrow function here

let sumArrow = (arr) => {
    total = 0
    for (num of arr){
        if (num > 0){
            total += num
        }
    }
    return total
}

// Call function here with arguments
console.log(sumArrow([10, 12, -9, 3, -1, 0, 15]))
console.log(sumArrow([3, 5, 7, 9, -10, 2, -22, -1]))