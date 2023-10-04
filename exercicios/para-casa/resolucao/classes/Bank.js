class Bank {
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

const bank1 = new Bank(111, 'MeBank', 0.02);
const bank2 = new Bank(222, 'LinaBank', 0.01);

// console.log(bank1);
// console.log(Bank.createdBanks);
// console.log(bank1.transferTax);
// bank1.transferTax = 0.03
// console.log(bank1.transferTax);

export { Bank, bank1, bank2 }
