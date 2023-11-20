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

// Objects with functions
	// Objects also have a built in 'this' keyword

let archer = {
	level: 20,
	weapon: weapon.range,
	stats: {
		hitpoints: 45,
		range: 50
	},
	retalialte: function(){
		console.log(`You have attacked the Archer! He fires back! He has a range level of ${this.stats.range}`)
		return 'You have attacked the Archer! He fires back!'
	}
}

archer.retalialte()