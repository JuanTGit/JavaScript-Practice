console.log('Hello from promises');

// Callback Hell problem is solved with Promises!

/*
    In JavaScript, a Promise is an object that returns a value which you hope to receive in the future, but not now.
    Has three states:
    1. Pending: initial state, neither fulfilled nor rejected
    2. Fulfilled: meaning that the operation was completed successfully
    3. Rejected: meaning that the operation failed
*/

let completed = true;

let doMyChores = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (completed){
            resolve('I did my chores.')
        } else {
            reject('I did not do my chores')
        }
    }, 3000)
})

console.log(doMyChores)

function downloadSong(songName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (songName.length !== 0){
                resolve(songName)
            } else {
                reject(`encountered an error downloading ${songName}`)
            }
        }, 3000)
    })
}

// downloadSong('Goodbye').then((s) => console.log(s), (err) => console.error(err))

// chaining

downloadSong('')
    .then(s => {
        console.log(s + '!!!!')
        return s.toUpperCase()
    })
    .then(val => console.log(val))
    .catch(err => console.error(err))
    .finally(() => console.log('Promise Over'))

