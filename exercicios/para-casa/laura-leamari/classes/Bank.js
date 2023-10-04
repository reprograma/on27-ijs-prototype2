export class Bank {
  bankCode;
  bankName;
  #transferTax;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax){
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;

    Bank.createdBanks.push({bankCode, qtdClients: 0});
  }

  get transferTax(){
    return this.#transferTax;
  }

  set transferTax(newTransferTax){
    this.#transferTax = newTransferTax
  }
}

export const bank1 = new Bank(100, 'LuaBank', 0.01);
export const bank2 = new Bank(152, 'Nubank', 0.05);
export const bank3 = new Bank(164, 'Bradesco', 0.1);