export class BankAccount {
    constructor(client, bank, accountNumber, agencyNumber) {
      this.client = client;
      this.bank = bank;
      this.accountNumber = accountNumber;
      this.agencyNumber = agencyNumber;
      this._balance = 0;
      this.qtdWithdrawal = 0;
    }
  
    get balance() {
      return this._balance;
    }
  
    creditAmount(amount) {
      this._balance += amount;
      console.log(`O saldo da conta é: R$ ${this._balance}`);
    }
  
    debitAmount(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`O saldo da conta é: R$ ${this._balance}`);
      } else {
        console.log("Saldo insuficiente para a operação.");
      }
    }

  }

  