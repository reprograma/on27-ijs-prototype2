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
      numClients: 0,
    });
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(newtransferTax) {
    this.#transferTax = newtransferTax;
  }

  static associateClient(clientBank) {
    Bank.createdBanks.find((bank) => bank.bankCode === clientBank.bankCode)
      .numClients++;
  }

  static removeClient(clientBank) {
    Bank.createdBanks.find((bank) => bank.bankCode === clientBank.bankCode)
      .numClients--;
  }
}
