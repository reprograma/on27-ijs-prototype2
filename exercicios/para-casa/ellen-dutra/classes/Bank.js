export class Bank {
  bankCode;
  bankName;
  #transferTax;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;

    this.constructor.createdBanks.push({ bankCode, customerCount: 0 });
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(tax) {
    this.#transferTax = tax;
  }
}
