console.log('This is tut 31');

class Employee {

	constructor(name, experience, division) {

		this.name = name;
		this.experience = experience;
		this.division = division;
	}
	slogan() {
		return `I am ${this.name} , I have experience of ${this.experience} years and my division is ${this.division}`
	}
	joiningYear() {
		return new Date().getFullYear() - this.experience;
	}

	static add(a, b) {
		return a + b;
	}
}

class Programmer extends Employee {
	constructor(name, experience, division, language, github) {
		super(name, experience, division);
		this.language = language;
		this.github = github;
	}

	favoriteLanguage() {
		if (this.language == 'python') {
			return 'Python';
		}
		else {
			return 'Javascript';
		}
	}

	static multiply(a, b) {
		return a * b;
	}
}

// Mandar = new Employee('Mandar', 3, 'Programmer');
// console.log(Mandar.slogan());
// console.log(Mandar.joiningYear());
// console.log(Employee.add(34, 5));

yogesh = new Programmer('Yogesh', 4, 'Programmer', 'Go', 'yogesh7770');
console.log(yogesh);
console.log(Programmer.multiply(4, 5));

