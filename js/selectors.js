console.log(`Hello from selectors!`)

console.log(document.getElementsByTagName('h1'))

let secondHeader = document.getElementsByTagName('h1')[1]

setTimeout(() => {
    secondHeader.innerHTML = 'New Text';
    secondHeader.className = 'color';
}, 3000) 

let myElement = document.querySelector('#fourth')
console.log(myElement)



let querySelect = document.querySelector('div > p')
let querySelectAll = document.querySelectorAll('p')
console.log(querySelect.innerHTML)
console.log(querySelectAll)

console.clear()

// Set up a button to change the backgroud on myElement
let clicker = document.getElementById('btn')
// console.log(clicker) 

// Add callback function to change background color

const colorChange = () => {
    if (myElement.className === ''){
        myElement.className = 'color'
    } else {
        myElement.className = ''
    }
}

// Add event listener to button

clicker.addEventListener('click', colorChange)

 
let anotherHeader = document.getElementsByTagName('h1')[2]

anotherHeader.addEventListener('mouseenter', () => anotherHeader.innerHTML = 'Mouse hovering');
anotherHeader.addEventListener('mouseleave', () => anotherHeader.innerHTML = 'Hello!');

// Use JS to create new elements

let newButton = document.createElement('button')
newButton.innerHTML = 'New Button!'
newButton.style = "color: blue; padding: 10px"

// Add new element to document
document.body.append(newButton)

// Add event listener to new element
newButton.addEventListener('click', () => {
    // console.log('I have been clicked!')
    let newHeader = document.createElement('h2');
    newHeader.innerHTML = prompt('What would you like to say?');
    newHeader.className = 'color';
    document.body.append(newHeader);
})



// Using JS to grab data from a submitted form

// Get form using the document
const testDataForm = document.querySelector('#testDataForm');
// console.log(testDataForm)

testDataForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)
    let firstName = event.target.first.value
    let lastName = event.target.last.value
    console.log(firstName, lastName)
})