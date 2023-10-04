import { Bank, bank1 } from "./Bank.js";
import { Client, client1 } from "./Client.js";

export class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;
  #qtdWithdrawal = 0;
  #withdrawalTax = 0.03;
  freeWithdrawal = 2;

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
    this.qtdWithdrawal;
  }

  get balance() {
    return this.#balance;
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  get withdrawalTax() {
    return this.#withdrawalTax;
  }

  set withdrawalTax(amount) {
    this.#withdrawalTax = amount;
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

    if (this.#balance < amount) {
      throw `Saldo insuficiente! Você precisa de ${amount} para realizar essa transação!`;
    }

    if (this.bank !== anotherAccount.bank) {
      const bankName = this.bank;
      const totalDebited = amount + amount * bankName.transferTax;
      if (this.#balance < totalDebited) {
        throw `Saldo insuficiente! Você precisa de ${totalDebited} para realizar essa transação!`;
      }
      this.#balance -= totalDebited;
      anotherAccount.#balance += amount;
      console.log(
        `Seu total agora é ${this.#balance} e você transferiu ${amount}.`
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
      throw "Você precisa digitar uma conta válida!";
    }

    if (this.#balance !== 0) {
      throw "Seu saldo precisa ser zero!";
    }

    this.client = undefined;
    this.bank = undefined;
    this.accountNumber = undefined;
    this.agencyNumber = undefined;
    this.#balance = undefined;

    console.log(`A conta foi encerrada!`);
  }

  cashWithdrawal(amount) {
    if (this.#balance < amount) {
      throw "Saldo insuficiente!";
    }

    if (
      this.freeWithdrawal <= 0 &&
      this.#balance < amount + amount * this.#withdrawalTax
    ) {
      throw "Saldo insuficiente!";
    } else if (
      this.freeWithdrawal <= 0 &&
      this.#balance >= amount + amount * this.#withdrawalTax
    ) {
      this.#balance -= amount + amount * this.#withdrawalTax;
      this.#qtdWithdrawal += 1;
      console.log(
        `Você retirou ${amount} e não tem mais saques livres de taxa. Será cobrada uma taxa de ${
          this.#withdrawalTax * 100
        }%. Você retirou ${this.#qtdWithdrawal} vezes.`
      );
    } else {
      this.#balance -= amount;
      this.freeWithdrawal -= 1;
      this.#qtdWithdrawal += 1;
      console.log(
        `Você retirou ${amount} e tem ${
          this.freeWithdrawal
        } saques livres de taxa. Você retirou ${this.#qtdWithdrawal} vezes.`
      );
    }
  }
}