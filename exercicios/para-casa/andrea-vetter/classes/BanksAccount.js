import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client === false) {
      throw "A pessoa cliente deve estar registrada no cadastro de clientes!";
    }

    if (bank instanceof Bank === false) {
      throw "O banco deve estar registrado no cadastro de bancos!";
    }
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
  }

  get returnBalance() {
    return this.#balance;
  }

  credit(amount) {
    this.#balance += amount;
    console.log(`Foi creditado ${amount} e o saldo total é ${this.#balance}.`);
  }

  debit(amount) {
    this.#balance -= amount;
    console.log(`Foi debitado ${amount} e o saldo total é ${this.#balance}.`);
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount === false) {
      throw "Essa conta não existe!";
    }

    if (anotherAccount.balance < amount) {
      throw "O montante a ser transferido não é suficiente.";
    }

    if (this.bank !== anotherAccount.bank) {
      const bankName = this.bank;
      const totalDebited = amount + amount * bankName.transferTax;
      if (this.#balance < amount) {
        throw `Saldo insuficiente! Você precisa de ${totalDebited} para realizar essa transação!` 
      }
      this.#balance -= totalDebited;
      anotherAccount.#balance += amount;
      console.log(
        `Seu total agora é ${
          this.#balance
        } e você transferiu ${amount}!!!`
      );
    } else {
      this.#balance += amount;
      anotherAccount.#balance += amount;
      console.log(
        `Seu total agora é ${this.#balance} e você transferiu ${amount}.`
      );
    }
  }

  closeAccount() {
    if (this instanceof BankAccount === false) {
      throw "Você precisa digitar uma conta válida!"
    }

    if (this.#balance !== 0) {
      throw "Seu saldo precisa ser zero!"
    }

    this.client = undefined;
    this.bank = undefined;
    this.accountNumber = undefined;
    this.agencyNumber = undefined;
    this.#balance = undefined;

    console.log(`A conta foi encerrada!`);
  }
}




