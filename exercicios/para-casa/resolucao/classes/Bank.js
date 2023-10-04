export class Bank {
	bankCode;
	bankName;
    #transferTax = 0;

	static createdBanks = [];

	constructor(bankCode, bankName) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.constructor.createdBanks.push(
			{ bankCode: bankCode, qtdClients: 0 }
		);
	}

	get transferTax() {
		return this.#transferTax;
	}

	set transferTax(newTransferTax) {
		this.#transferTax = newTransferTax;
	}
}
