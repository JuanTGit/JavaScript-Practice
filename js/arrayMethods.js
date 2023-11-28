names = ['Jim', 'Dwight', 'Andy', 'Pam', 'Angela'];

// Standard Loop

for (let i=0; i < names.length; i++){
    console.log(names[i]);
}

for (n of names){
    console.log(n);
}

// Array Methods

// array.prototype.foreach(callback)

function callBack(el, idx, arr){
    console.log(el, idx, arr)
}

names.forEach(callBack)
// As an arrow function

names.forEach((e, i, a) => {console.log(a, e, i)})

// array.prototype.map()
myNumbers = [1, 2, 3, 4, 5]

function myNumSqOrCb(x, idx){
    if (idx % 2 == 0){
        return x ** 2
    } return x ** 3
}

squaredNums = myNumbers.map(myNumSqOrCb); // Calling myNumSq on each element in myNumbers 
console.log(squaredNums)

// map using arrow function

let exponentNums = myNumbers.map((x, i) => i%2===0 ? x**2:x**3)

console.log(exponentNums)

console.clear()

/////////////////////////////
// array.prototype.filer() //
/////////////////////////////

// filter looks from a boolean: If true is stays in if it's false it gets filtered out. 

let cities = ['Houston', 'San Diego', 'Cape Cod', 'Boston', 'Austin'];

function callbackFilter(el){
    return el.length > 6
}

let bigCities = cities.filter(callbackFilter)
console.log(bigCities)

// Filter arrow func

let arrBigCities = cities.filter(el => el.length > 6)
console.log(arrBigCities)

console.clear()

//////////////////////////////
// array.prototype.reduce() //
//////////////////////////////

let newNums = [5, 10, 15, 20, 25, 30]

function myReducer(prev, curr){
    return prev + curr
}

let reducer = newNums.reduce(myReducer)
console.log(reducer)

// or //

function sumNums(arr){
    totalSum = 0;
    for (let n of arr){
        totalSum += n
    }
    return totalSum
}

console.log(sumNums(newNums))

console.clear()

/////////////////////////////
// array.prototype.slice() //
/////////////////////////////
// Creates a new list

let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];


console.log(colors.slice(2, 6)) // Returns elements starting at 2 through 6(not inclusive)
console.log(colors.slice(-4)) // Returns the last 4 elements

console.clear()

//////////////////////////////
// array.prototype.splice() //
//////////////////////////////
// Changes array in place

console.log(colors);
// splice(start, delete count, items... to add in)
let deletedColors = colors.splice(2, 2, 'Pink', 'White', 'Sage Green')
console.log(colors)
console.log(deletedColors);
let cutColors = colors.slice(2, 5)
console.log(cutColors);
