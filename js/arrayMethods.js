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