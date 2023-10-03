export class Passenger {
	name;
	age;
	#password;
	#amountSpent = 0;

  static passengers = [];

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.#password = password;
    this.constructor.passengers.push({ name: name, age: age });
	}

	requestDrive(driver, amount, password) {
		if (!(driver instanceof Driver)) {
			console.log('Motorista inválido!');
			return;
		}
		if (password !== this.#password) {
			console.log(`${this.name}, sua senha está incorreta!`);
			return;
		}
		this.#amountSpent -= amount;
		driver.runDrive(amount);
	}

  changePassword(oldPassword, newPassword) {
		if (oldPassword === this.#password) {
			this.#password = newPassword;
		} else {
			console.log('A senha antiga não correnponde!');
		}
	}

  static numberOfPassengers() {
		console.log(`O total de passageiras cadastradas é: ${this.passengers.length}`);
	}

	static ageAverage() {
		const totalOfPassengers = this.passengers.length;

    if(totalOfPassengers === 0) return;

		const ageSum = this.passengers.reduce((total, motorista) => total + motorista.age, 0);
		const ageAverage = (ageSum / totalOfPassengers).toFixed(2);
		console.log(`A média de idade das passageiras é de: ${ageAverage}`);
	}

  get amountSpent() {
		return this.#amountSpent;
	}

	set amountSpent(amount) {
		this.#amountSpent = amount;
	}
}