export class Bank {
  bankCode;
  bankName;
  #transferTax;
  
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    Bank.createdBanks.push({ bankCode: bankCode, qtdClients: 0 });
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(tax) {
    this.#transferTax = tax;
  }
}

const bank1 = new Bank(248, 'MeBank', 0.02);
console.log(bank1);
const bank2 = new Bank(249, 'MelBank', 0.01);
console.log(Bank.createdBanks);
