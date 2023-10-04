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

    Bank.createdBanks.push({
      bankCode: this.bankCode,
      numClients: this.#numClients,
    });
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(newTransferTax) {
    this.#transferTax = newTransferTax;
  }
}

export const bank1 = new Bank(200, "BoboBank", 0.01);
export const bank2 = new Bank(300, "CrysBank", 0.03);
console.log("bank 1:", bank1);
console.log("bank 2:", bank2);
// console.log("createdBanks:", Bank.createdBanks);
