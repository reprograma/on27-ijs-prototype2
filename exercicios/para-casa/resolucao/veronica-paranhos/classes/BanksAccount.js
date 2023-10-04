import { Bank, bank1 } from "./Bank.js";
import { Client, client1 } from "./Client.js";

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
    console.log(
      `O novo saldo da conta ${this.accountNumber} é: R$ ${this.#balance}`
    );
  }

  debitAmount(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log(
        `O novo saldo da conta  ${this.accountNumber} é: R$ ${this.#balance}`
      );
    } else {
      console.log("Você não tem saldo suficiente para essa operação.");
    }
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount))
      return console.log("O parâmetro é inválido!");

    const totalWithTax = amount * (1 + this.bank.transferTax);

    if (this.#balance < totalWithTax)
      return console.log("Você não tem saldo suficiente para essa operação.");

    if (anotherAccount.bank.accountNumber !== this.accountNumber) {
      this.#balance -= totalWithTax;
      console.log(
        `Essa transferência terá uma taxa de 1%, pois se trata de uma transferência entre bancos diferentes.
Transferência realizada com sucesso! O saldo atual da conta de origem é R$ ${
          this.#balance
        }`
      );
    }

    anotherAccount.creditAmount(amount);
  }

  closeAccount() {
    if (this.balance === 0) {
      this.client = undefined;
      this.bank = undefined;
      this.accountNumber = undefined;
      this.agencyNumber = undefined;

      console.log("Conta encerrada com sucesso!");
    } else {
      console.log(
        `Seu saldo precisa estar zerado para fechar a conta. Saldo atual: ${
          this.#balance
        }.`
      );
    }
  }
}

// const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
// const client2 = new Client("Verônica", 12345678900);
// const bank2 = new Bank(200, "Nubank", 0.015);
// const bankAccount2 = new BankAccount(client2, bank2, 1112, 3333);
// console.log(bankAccount1);
// console.log(bankAccount1.balance);
// bankAccount1.creditAmount(1000);
// bankAccount1.debitAmount(300);
// bankAccount1.transferTo(bankAccount2, 200);
// bankAccount1.closeAccount();
// console.log(bankAccount1);
