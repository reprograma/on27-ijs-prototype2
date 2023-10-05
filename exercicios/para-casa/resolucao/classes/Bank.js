export class Bank {
    constructor(code, name, transferTax) {
      this.code = code;
      this.name = name;
      this._transferTax = transferTax;
      this.qtdClients = 0;
      Bank.createdBanks.push({ code: this.code, qtdClientes: this.qtdClientes });
    }
  
    get transferTax() {
      return this._transferTax;
    }
  
    set transferTax(value) {
      this._transferTax = value;
    }
  
    static createdBanks = [];
  }

