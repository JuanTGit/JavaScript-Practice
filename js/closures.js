////////////////////////////////////////////////////////////////////////////////
//                                  Closures                                  //
// A closure is a function that perserves the outer scope in its inner scope  //
////////////////////////////////////////////////////////////////////////////////

function outer(){
    let outerMessage = "This is the outer message"
    function inner(){
        let inner = outerMessage + ' and this is the inner.'
        console.log(inner)
    }

    return inner
}

let outerReturn = outer();
console.log(outerReturn())



function counter(step=1){
    let counter = 0;
    function insideStep(){
        counter += step
        console.log(`Counter incresed by ${step} counter: ${counter}`)
    }
    return insideStep
}

let stepByOne = counter();
let stepByFive = counter(5);

// IIFE - Immediately Invoked Function Expression

const stepCounter = (function(step=1){
    let counter = 0;
    const insideFunc = function(){return counter += step};
    return insideFunc
})();

console.log(stepCounter)