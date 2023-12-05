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
console.log(clicker) 

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

 


