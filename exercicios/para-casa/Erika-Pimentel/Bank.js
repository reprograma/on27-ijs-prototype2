export class Bank {
  bankCode;
  bankName;
  #transferTax;
  #numClients;
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
      this.bankCode = bankCode;
      this.bankName = bankName;
      this.#transferTax = transferTax;
      this.#numClients = 0;
      Bank.createdBanks.push({ bankCode: this.bankCode, qtdClients: this.#numClients });
  }

  get transferTax() {
      return this.#transferTax;
  }

  set transferTax(tax) {
      this.#transferTax = tax;
  }
}

export const bank1 = new Bank(100, "Banco do Brasil", 0.01);
export const bank2 = new Bank(101, "Itau", 0.03);
console.log("bank 1:", bank1);
console.log("bank 2:", bank2);