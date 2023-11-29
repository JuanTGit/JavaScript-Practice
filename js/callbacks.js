// Synchronous callback executed immediately //

function greeting(name, age){
    alert(`Hello ${name}! You're ${age} years old!`)
}

function processGreeting(callback){
     var name = prompt("What is your name? ")
     var dob = prompt("How old are you? ")
     callback(name, dob)
}
// processGreeting(greeting)

// Reason for callbacks are functions we know have to be executed later, 
// but we first have to process the user input before we can execute them


// JavaScript Callback Function
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// basic Callback with the DOM and button

let myButton = document.getElementById('btn');

function buttonClicked(){
    alert('This button has been clicked!')
}

myButton.addEventListener('click', buttonClicked);

console.clear()

/////////////////////
// Async Examples //
////////////////////

// JavaScript works asynchronously, the second function will execute before the first finishes.

// function first(){
//     console.log('First started...')
//     setTimeout(() => console.log('First ended...'),
//     3000)
// }

// function second(){
//     console.log('Second started...')
//     console.log('Second ended...')
// }

// first();
// second();

console.clear()
// Real World Async example //

function downloadSong(songName, callback){
    console.log(`${songName} has begun downloading...`)
    setTimeout(() => {
        console.log(`${songName} has finished downloading...`)
        callback(songName)
    },
    3000)
    return songName
}

function playSong(song){
    console.log(`${song} is now playing...`)
}

// downloadSong('Kid Cudi', playSong)

// Though callbacks give us more functionality... 
// They also introduce their own problem: Callback Hell

let song1 = 'Enter Sandman'
let song2 = 'Miss Summer'
let song3 = 'North Face'

// downloadSong(song1, (s) => {
//     console.log(`${song1} is now saved.`)
//     downloadSong(song2, (s) => {
//         console.log(`${song2} is now saved.`)
//         downloadSong(song3, (s) => {
//             console.log(`${song3} is now saved.`)
//         })
//     })
// })


// Handling Errors

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`${songName} has begun downloading...`)
    setTimeout(() => {
        let isValid = songName.length !== 0;

        isValid ? callbackSuccess(songName) : callbackFail(songName)

    }, 3000)
}

downloadSong2(song2, 
    (s) => console.log(`${s} has been saved successfully!`),
    (s) => console.error(`Error downloading ${s}`)
    )