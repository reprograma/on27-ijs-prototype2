import { Person } from "./Person.js";
export class Driver extends Person {
	numberOfRides = 0;

  static drivers = [];

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		super(name, age);
    this.constructor.drivers.push({ name: name, age: age });
	}

	runDrive(amount) {
		this.amount += amount;
		this.numberOfRides++;
	}

  static numberOfDrivers() {
		const numberOfDrivers = super.numberOfPersons(Driver.drivers);
		console.log(`O total de motoristas cadastradas é: ${numberOfDrivers}`);
	}

	static ageAverage() {
		const ageAverageReturned = super.ageAverage(Driver.drivers);
		console.log(`A média de idade das motoristas é de: ${ageAverageReturned}`);
	}
}
