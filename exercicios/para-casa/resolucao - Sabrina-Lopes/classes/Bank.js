export class Bank {
  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this._transferTax = transferTax;
    this.qtdClients = 0;
    Bank.createdBanks.push({ bankCode: this.bankCode, qtdClients: this.qtdClients });
  }

  get transferTax() {
    return this._transferTax;
  }

  set transferTax(newTransferTax) {
    this._transferTax = newTransferTax;
  }

  static createdBanks = [];
}

//testes
const bank1 = new Bank(100, 'SaBank', 0.01);
const bank2 = new Bank(200, 'MajuBank', 0.02);

console.log("bank 1:", bank1);
console.log("bank 2:", bank2);
console.log(Bank.createdBanks)
console.log(bank1.transferTax)
console.log(bank1.numberOfClients)
