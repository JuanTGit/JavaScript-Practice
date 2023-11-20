// Simple JS Object Creation

let knight = {
	level: 50,
	hitpoints: 35,
	weapon: 'Sword'
}

console.log(knight)

// Complex JS Object Creation
let weapon = {
	melee: 'Sword',
	range: 'Bow',
	magic: 'Staff'
}

let knightTwo = {
	level: 55,
	weapon: weapon.melee,
	stats: {
		hitpoints: 45,
		strength: 20,
		defence: 30,
		attack: 20
	},
	phrases: ['Welcome to the kingdom!', `My weapon is a ${weapon.melee}`]
}

console.log(knightTwo.phrases[1])