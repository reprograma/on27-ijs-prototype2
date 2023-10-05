export class Bank {
  #transferTax
  static createdBanks = []

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode
    this.bankName = bankName
    this.#transferTax = transferTax
    Bank.createdBanks.push({ bankCode: bankCode, qtdClients: 0 })
  }

  get transferTax() {
    return this.#transferTax
  }

  set transferTax(newTax) {
    this.#transferTax = newTax
  }
}