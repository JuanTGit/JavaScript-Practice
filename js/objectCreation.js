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

// const defenderMethods = {
// 	takeDamage: function(damage){
// 		console.log(`${this.classType} has Taken ${damage} damage worth of hitpoints!`);
// 		this.hitpoints -= damage;
// 		console.log(`Hitpoints now at: ${this.hitpoints}`);
// 	},

// 	healHitpoints: function(heal){
// 		console.log(`${this.classType} has healed ${heal} hitpoints!`);
// 		this.hitpoints += heal;
// 		console.log(`Hitpoints now at: ${this.hitpoints}`)
// 	} 
// }

// function Defender(classType, level, hitpoints){
// 	let defender = Object.create(defenderMethods);
// 	defender.classType = classType;
// 	defender.level = level;
// 	defender.hitpoints = hitpoints;

// 	return defender
// }

// const knight = Defender('Knight', 20, 100)
// const archer = Defender('Archer', 15, 100)
// const mage = Defender('Mage', 20, 100)

// console.log(knight.takeDamage(20))

// console.log(knight.healHitpoints(20))
// console.log(knight)


//////////////////////////////////////////

const animalMethods = {	
	play: function(time){
		this.energy -= time
		console.log(`${this.name} is playing and is now at ${this.energy} energy!`)
	},
}

function Animal2(name, energy){
	let animal = Object.create(animalMethods)
	animal.name = name;
	animal.energy = energy;

	return animal
}

const snoopy = Animal2('Snoopy', 50)
console.log(snoopy)

/////////////////////////////
// Prototype Instantiation //
/////////////////////////////

// function Animal(name, energy){
// 	let animal = Object.create(Animal.prototype)
// 	animal.name = name;
// 	animal.energy = energy;

// 	return animal
// }

// Animal.prototype.sleep = function(amount){
// 	this.energy += amount
// 	console.log(`${this.name} is Sleeping! Energy at ${this.energy}.`)
// }
// Animal.prototype.play = function(amount){
// 	this.energy -= amount
// 	console.log(`${this.name} is Playing! Energy drained and now at ${this.energy}.`)
// }
// Animal.prototype.eat = function(amount){
// 	this.energy += amount
// 	console.log(`${this.name} is eating. Energy up to ${this.energy}`)
// }

// const odin = Animal('Odin', 80)

// console.log(odin.sleep(20))
// console.log(odin.play(20))

////////////////////////////////////
// Instantiation with new keyword //
// Pseudoclassical Instantiation  //
////////////////////////////////////


function Animal(name, energy){
	// let animal = Object.create(Animal.prototype)
	this.name = name;
	this.energy = energy;

	// return animal
}

Animal.prototype.sleep = function(amount){
	this.energy += amount
	console.log(`${this.name} is Sleeping! Energy at ${this.energy}.`)
}
Animal.prototype.play = function(amount){
	this.energy -= amount
	console.log(`${this.name} is Playing! Energy drained and now at ${this.energy}.`)
}
Animal.prototype.eat = function(amount){
	this.energy += amount
	console.log(`${this.name} is eating. Energy up to ${this.energy}`)
}

const odin = new Animal('Odin', 80)

console.log(odin.sleep(20))
console.log(odin.play(20))


///////////////////////////////////
// ES6 - Using the class keyword //
///////////////////////////////////

// const defenderMethods = {
	// takeDamage: function(damage){
	// 	console.log(`${this.classType} has Taken ${damage} damage worth of hitpoints!`);
	// 	this.hitpoints -= damage;
	// 	console.log(`Hitpoints now at: ${this.hitpoints}`);
	// },

	// healHitpoints: function(heal){
	// 	console.log(`${this.classType} has healed ${heal} hitpoints!`);
	// 	this.hitpoints += heal;
	// 	console.log(`Hitpoints now at: ${this.hitpoints}`)
	// } 
// }

class Defender{
	constructor(classType, hitpoints, level=3){
		this.classType = classType;
		this.hitpoints = hitpoints;
		this.level = level;
	}

	heal(health){
		console.log(`${this.classType} has healed ${health} hitpoints!`);
		this.hitpoints += health;
		console.log(`Hitpoints now at: ${this.hitpoints}`)
	}
	takeDamage(damage){
		console.log(`${this.classType} has Taken ${damage} damage worth of hitpoints!`);
		this.hitpoints -= damage;
		console.log(`Hitpoints now at: ${this.hitpoints}`);
	}
	levelUp(experience){
		console.log(`${this.classType} has gained ${experience} experience.`)
		this.level += experience
		console.log(`${this.classType} is now level: ${this.level}`)
	}
}

const knight = new Defender('Knight', 100)
const archer = new Defender('Archer', 100, 20)
const mage = new Defender('Mage', 100, 15)

console.log(knight.takeDamage(20))
console.log(knight.heal(20))
console.log(knight.levelUp(10))
console.log(knight)

console.clear()

///////////////////////
// Class Inheritance //
///////////////////////


class Human{
	constructor(name, age, gender){
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	birthday(age){
		this.age += age
	}

	genderSwap(gender){
		this.gender = gender
	}
}

const alex = new Human('Alex', 19, 'M')
const shrek = new Human('Shrek', 34, 'M')

class Child extends Human{
	constructor(childName, childAge, childGender, isAdult=false){
		super(childName, childAge, childGender)
	}
	adult(childAge) {
		if (childAge > 17){
			this.age = childAge
			this.isAdult = true
		} else {
			this.age = childAge
		}
	}
}

const brian = new Child('Brian', 13, 'M')
