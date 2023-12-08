
const getPokemonAPI = async function(pokeName){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    let data = await response.json()
    return await data
}

const pokeForm = document.getElementById('pokeForm')

// Function to generate a list of pokemon attributes

function addToPokeList(pokemon){
    let pokeList = document.getElementById('pokeList')
    let liEl = document.createElement('li')
    liEl.innerHTML = `Name: ${pokemon.name} Height: ${pokemon.height} Weight: ${pokemon.weight} abilities: ${pokemon.abilities[0].ability.name}`
    pokeList.append(liEl); 
}

pokeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    let pokeFormName = event.target.pokeName.value.toLowerCase();
    let pokemon = await getPokemonAPI(pokeFormName);
    console.log(pokemon)
    addToPokeList(pokemon)
})




