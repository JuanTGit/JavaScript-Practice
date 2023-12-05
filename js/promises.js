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

// downloadSong('The One That Got Away')
//     .then(s => {
//         console.log(s + '!!!!')
//         return s.toUpperCase()
//     })
//     .then(val => console.log(val))
//     .catch(err => console.error(err))
//     .finally(() => console.log('Promise Over'))


// Real world example using promises and callbacks

function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Getting user ${userId} from database.`)
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'jtejeda'
            })
        }, 1000)
    })
}

// console.log(getUser(123).then(user => console.log(user.username)))

function getUserOrder(user){
    return new Promise((resolve, reject) => {
        console.log(`Getting ${user.username} order from database.`)
        setTimeout(() => {
            resolve([
                {prodName: 'Laptop', price: 1000},
                {prodName: 'iPhone15', price: 1200},
                {prodName: 'slippers', price: 20}
            ])
        }, 1000)
    })
}

console.log(getUserOrder({username: 'jtejeda'}).then(arr => arr.forEach(e => console.log(e.price))))