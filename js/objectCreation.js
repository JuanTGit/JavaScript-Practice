// Simple JS Object Creation

let knightObj = {
	level: 50,
	hitpoints: 35,
	weapon: 'Sword'
}

console.log(knightObj)

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

let archerObj = {
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

archerObj.retalialte()

console.clear()

//////////////////////////////
// Functional Instantiation //
//////////////////////////////

const defenderMethods = {
	takeDamage: function(damage){
		console.log(`${this.classType} has Taken ${damage} damage worth of hitpoints!`);
		this.hitpoints -= damage;
		console.log(`Hitpoints now at: ${this.hitpoints}`);
	},

	healHitpoints: function(heal){
		console.log(`${this.classType} has healed ${heal} hitpoints!`);
		this.hitpoints += heal;
		console.log(`Hitpoints now at: ${this.hitpoints}`)
	} 
}

function Defender(classType, level, hitpoints){
	let defender = Object.create(defenderMethods);
	defender.classType = classType;
	defender.level = level;
	defender.hitpoints = hitpoints;

	return defender
}

const knight = Defender('Knight', 20, 100)
const archer = Defender('Archer', 15, 100)
const mage = Defender('Mage', 20, 100)

console.log(knight.takeDamage(20))

console.log(knight.healHitpoints(20))
console.log(knight)


//////////////////////////////////////////

const animalMethods = {	
	play: function(time){
		this.energy -= time
		console.log(`${this.name} is playing and is now at ${this.energy} energy!`)
	},
}

function Animal(name, energy){
	let animal = Object.create(animalMethods)
	animal.name = name;
	animal.energy = energy;

	return animal
}

const snoopy = Animal('Snoopy', 50)
console.log(snoopy.play(20))

/////////////////////////////
// Prototype Instantiation //
/////////////////////////////

