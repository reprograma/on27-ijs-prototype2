import { Person } from "./Person.js";

export class Client extends Person {
	banks = [];

	addBank(bank) {
		if (this.banks.includes(bank)) {
			return console.log("Cliente já tem esse banco associado a ele.");
		}

		this.banks.push(bank);
		bank.qtdClients++;
	}

	removeBank(bank) {
		if (!this.banks.includes(bank)) {
			return console.log("Cliente não tem esse banco associado a ele.");
		}

		this.banks.splice(this.banks.indexOf(bank), 1);
		bank.qtdClients--;
	}

}