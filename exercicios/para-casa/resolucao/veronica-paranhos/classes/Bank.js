export class Bank {
  bankCode;
  bankName;
  #transferTax;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;

    Bank.createdBanks.push({
      bankCode: this.bankCode,
      qtdClients: 0,
    });
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(newTransferTax) {
    this.#transferTax = newTransferTax;
  }
}

export const bank1 = new Bank(100, "LuaBank", 0.01);
export const bank2 = new Bank(200, "AnotherBank", 0.02);
// console.log(Bank.createdBanks);
// console.log(bank1);
// console.log(Bank.createdBanks);
// console.log(bank1.transferTax);
// bank1.transferTax = 0.02;
// console.log(bank1.transferTax);
