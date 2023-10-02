class Bank {
  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this._transferTax = transferTax;
    this.qtdClients = 0; // Inicializa a quantidade de clientes como 0
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

// Exemplo de uso:
console.log(Bank.createdBanks); // []

const bank1 = new Bank(100, 'LuaBank', 0.01);
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]

console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02;
console.log(bank1.transferTax); // 0.02
