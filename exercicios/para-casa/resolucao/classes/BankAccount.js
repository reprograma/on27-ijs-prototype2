export class BankAccount {
	client;
	bank;
	accountNumber;
    agencyNumber;
	#balance = 0;

	constructor(client, bank, accountNumber, agencyNumber) {
		this.client = client;
		this.bank = bank;
		this.accountNumber = accountNumber;
		this.agencyNumber = agencyNumber;
	}

	credit(amount) {
		this.#balance += amount;
		console.log(`Crédito de ${amount} realizado com sucesso!`);
	}
	debit(amount) {
		if (this.#balance < amount) {
			console.log("Saldo insuficiente.");
			return;
		}

		this.#balance -= amount;
		console.log(`Débito de ${amount} realizado com sucesso!`);
	}
	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log("Conta inválida.");
			return;
		}

		if (this.#balance < amount) {
			console.log("Saldo insuficiente.");
			return;
		}

		if (this.bank !== anotherAccount.bank) {
			this.#balance -= amount + this.bank.transferTax;
		} else {
			this.#balance -= amount;
		}

		anotherAccount.credit(amount);
		console.log(`Transferência de ${amount} realizada com sucesso!`);
	}
	closeAccount() {
		if (this.#balance > 0) {
			console.log("Não é possível encerrar uma conta com saldo positivo.");
			return;
		}

		this.client.removeBank(this.bank);
		console.log("Conta encerrada com sucesso!");
	}
	
	get balance() {
		return this.#balance;
	}
}