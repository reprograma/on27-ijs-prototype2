import { Bank } from "./Driver.js";

export class Client {
	name;
	cpf;
    banks = []

  static passengers = [];

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.#password = password;
    this.constructor.passengers.push({ name: name, age: age });
	}

	get amountSpent() {
		return this.#amountSpent;
	}

	set amountSpent(newAmountSpent) {
		this.#amountSpent = newAmountSpent;
	}

	addBank(bank) {
		if(bank instanceof Bank) {
			this.bank != banks;
			console.log('Cliente adicionado com sucesso.');
		} else {
			console.log('Esse cliente já possui conta.');
		}
	}

	removeBank(bank) {
		if(bank instanceof Bank) {
			this.bank == banks;
			console.log('Cliente removido com sucesso.');
		} else {
			console.log('Esse cliente não possui conta.');
		}
	}
    

// 	requestDrive(driver, amount, password) {
// 		if (!(driver instanceof Driver)) {
// 			console.log('Motorista inválido!');
// 			return;
// 		}
// 		if (password !== this.#password) {
// 			console.log(`${this.name}, sua senha está incorreta!`);
// 			return;
// 		}
// 		this.#amountSpent -= amount;
// 		driver.runDrive(amount);
// 	}

//   static numberOfPassengers() {
// 		console.log(`O total de passageiras cadastradas é: ${this.passengers.length}`);
// 	}

// 	static ageAverage() {
// 		const totalOfPassengers = this.passengers.length;

//     if(totalOfPassengers === 0) return;

// 		const ageSum = this.passengers.reduce((total, motorista) => total + motorista.age, 0);
// 		const ageAverage = (ageSum / totalOfPassengers).toFixed(2);
// 		console.log(`A média de idade das passageiras é de: ${ageAverage}`);
// 	}
}