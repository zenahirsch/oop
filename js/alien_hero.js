var AlienHero = function () {};

AlienHero.prototype = new SuperHero({
	name: 'Alien Hero',
	power: 7, // Much weaker attack
	defense: 9, // Higher defense
	toughness: 170, // Average toughness
	strength: 30 // More strength
});


// Weaker attack, but less expensive
AlienHero.prototype.alienAttack = function (superhero) {
	if (this.strength >= 1) {
		this.state = 1;
		superhero.toughness -= (1 * this.power) + superhero.getDefense(); // 1 * power, instead of 2 * power
		this.strength -= 1; // uses 1 strength instead of 2

		if (superhero.toughness <= 0) {
			superhero.state = 4;
			console.log(this.name + ' killed ' + superhero.name + ' with alien stuff!');
		}

		return true;

	} else {
		console.log(this.name + ' doesn\'t have enough strength left!');
		return false;
	}
};


AlienHero.prototype.alienHighFive = function (superhero) {
	if (this.state !== 4 && superhero.state !== 4) {
		this.power += 2;
		this.defense += 2;
		this.toughness += 11;
		this.strength -= 5; // Saps alien of 5 strength

		superhero.power += 2;
		superhero.defense += 2;
		superhero.toughness += 11;
		superhero.strength += 10; // Gives superhero more strength than usual

		return true;

	} else {

		return false;
	}
};