export class Bank {
  bankCode;
  bankName;
  #transferTax;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;

    this.constructor.createdBanks.push({ bankCode: bankCode, amountClients: 0});
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(amount) {
    this.#transferTax = amount;
  }
}

export const bank1 = new Bank(100, 'LuaBank', 0.01); // Instanciação de um objeto Bank.

export const bank2 = new Bank(200, 'AnotherBank', 0.02);