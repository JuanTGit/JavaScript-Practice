console.log('pikapika')

// Get respone from api
// https://pokeapi.co/api/v2/pokemon/[enter param]/

const getPokeApi = async function(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    let data = await response.json()
    return await data
}

// Grab data from user
const pokeForm = document.getElementById('pokeForm')

pokeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    let pokeName = event.target.pokeName.value
    let pokemon = await getPokeApi(pokeName)
    addToPokeList(pokemon)
})

// Return an element to our html file

function addToPokeList(pokemon){
    let pokeResults = document.getElementById('pokeList')
    let liEl = document.createElement('li')
    liEl.innerHTML = `Pokemon: ${pokemon.name}`
    pokeResults.append(liEl)
}