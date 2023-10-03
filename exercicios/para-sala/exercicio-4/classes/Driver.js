export class Driver {
	name;
	age;
	numberOfRides = 0;
	#amountEarned = 0;

  static drivers = [];

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		this.name = name;
		this.age = age;
    this.constructor.drivers.push({ name: name, age: age });
	}

	runDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}

  static numberOfDrivers() {
		console.log(`O total de motoristas cadastradas é: ${this.drivers.length}`);
	}

	static ageAverage() {
		const totalOfDrivers = this.drivers.length;

    if(totalOfDrivers === 0) return;

		const ageSum = this.drivers.reduce((total, motorista) => total + motorista.age, 0);
		const ageAverage = (ageSum / totalOfDrivers).toFixed(2);
		console.log(`A média de idade das motoristas é de: ${ageAverage}`);
	}

  get amountEarned() {
		return this.#amountEarned;
	}

	set amountEarned(amount) {
		this.#amountEarned = amount;
	}
}
