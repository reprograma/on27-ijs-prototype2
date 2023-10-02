import { Driver } from "./Driver.js";
export class Passenger {
	name;
	age;
	#password; // #transforma em atributo privado e impede de ser acessado fora da classe; obrigatoriamente tem que ser declarado antes de ser usado no atributo
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

  	static numberOfPassengers() {
		console.log(`O total de passageiras cadastradas é: ${this.passengers.length}`);
	}

	static ageAverage() {
		const totalOfPassengers = this.passengers.length;

    if(totalOfPassengers === 0) return;

		const ageSum = this.passengers.reduce((total, next) => total + next.age, 0);
		const ageAverage = (ageSum / totalOfPassengers).toFixed(2);
		console.log(`A média de idade das passageiras é de: ${ageAverage}`);
	}

	// get e set são palavras reservadas; get não recebe nenhum parametro set pode receber apenas um parametro, ambos podem receber condicionais 

	get newAmountSpent(){
		return this.#amountSpent;
	}
	set amountSpent(newAmountSpent){
		return this.#amountSpent = newAmountSpent;
	}

	changeOfPassword(oldPassword, newPassword){
		if (oldPassword === this.#password){
			this.#password = newPassword;
			console.log('Senha alterada.')
		} else{
			console.log('Senha atual não corresponde.')
		}
	}
}

