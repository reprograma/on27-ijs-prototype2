import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance;

  constructor(client, bank, accountNumber, agencyNumber) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
  }

  get balance() {
    return this.#balance;
  }

  creditAmount(amount) {
    this.#balance += amount;
    console.log( `O novo saldo da conta ${this.accountNumber} é: R$ ${this.#balance}` );
  }

  debitAmount(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log( `O novo saldo da conta  ${this.accountNumber} é: R$ ${this.#balance}` );
    } else {
      console.log("Saldo suficiente para essa operação.");
    }
  }

  transferTo(anotherAccount, amount) {
    if (this.bank === anotherAccount.bank) {
      if (this._balance >= amount) {
        this._balance -= amount;
        anotherAccount.credit(amount);
        console.log(`O saldo atual da conta de origem é de R$ ${this._balance}`);
      } else {
        console.log("Saldo insuficiente para a transferência.");
      }
    } else {
      const transferTax = this.bank.transferTax * amount;
      if (this._balance >= amount + transferTax) {
        this._balance -= (amount + transferTax);
        anotherAccount.credit(amount);
        console.log(`O saldo atual da conta de origem é de R$ ${this._balance}`);
      } else {
        console.log("Saldo insuficiente para a transferência.");
      }
    }
  }

   closeAccount() {
    if (this._balance === 0) {
      this.client.removeBank(this.bank);
      this.client = undefined;
      this.bank = undefined;
      this.accountNumber = undefined;
      this.agencyNumber = undefined;
      console.log("Conta encerrada!");
    } else {
      console.log("Não é possível encerrar a conta com saldo diferente de zero.");
    }
  }
}