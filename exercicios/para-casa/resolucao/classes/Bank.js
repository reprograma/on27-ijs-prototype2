export class Bank {

    bankCode;
    bankName;
    #transferTax;
    qtdClients = 0;
  
    static createdBanks = [];
  
    constructor(bankCode, bankName, transferTax) {
      this.bankCode = bankCode;
      this.bankName = bankName;
      this.#transferTax = transferTax;
      
      Bank.createdBanks.push({ bankCode: this.bankCode, qtdClients: this.qtdClients });
    }
    
    get TransferTax() {
      return this.#transferTax;
    }
  
    set TransferTax(newTransferTax) {
      this.#transferTax = newTransferTax;
    }
  }
  
  export const bank1 = new Bank(100, "LuaBank", 0.01);
  export const bank2 = new Bank(200, "AnotherBank", 0.02);
  