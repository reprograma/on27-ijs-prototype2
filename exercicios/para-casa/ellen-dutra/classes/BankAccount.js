import { Client } from './Client.js';
import { Bank } from './Bank.js';

export class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (!(client instanceof Client)) {
      console.log('Não é um cliente!');
      return;
    }

    if (!(bank instanceof Bank)) {
      console.log('Não é um banco!');
      return;
    }

    if (!client.banks.includes(bank)) {
      console.log(`Cliente de CPF ${client.cpf} não possui conta no banco ${bank.bankName}`);
      return;
    }

    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
  }

  get balance() {
    return this.#balance;
  }

  creditAmount(amount) {
    this.#balance += amount;
    console.log(`O novo saldo da conta é R$ ${this.#balance}`);
  }

  debitAmount(amount) {
    if (amount > this.#balance) {
      console.log(`Não há saldo suficiente`);
    }
    this.#balance -= amount;
    console.log(`O novo saldo da conta é R$ ${this.#balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log('Não é uma conta bancária');
      return;
    }

    let tax = 0;
    if (this.bank != anotherAccount.bank) {
      tax = 0.01;
      const amountToDebit = amount + amount * tax;

      if (this.#balance >= amountToDebit) {
        this.#balance -= amountToDebit;
        anotherAccount.#balance += amount;
        console.log(`Essa transferência terá uma taxa de 1%, pois se trata de uma transferência entre bancos diferentes.`);
        console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}, foi debitado o valor de R$ ${amountToDebit}`);
      } else {
        console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.#balance}. Para realizar essa transferência você precisa ter R$ ${amountToDebit} em conta.`);
      }
    } else {
      if (this.#balance < amount) {
        console.log(`Saldo insuficiente`);
      } else {
        this.#balance -= amount;
        console.log(`O saldo atual da conta de origem é R$ ${this.#balance}`);
      }
    }
  }

  closeAccount() {
    if (this.#balance > 0 || this.#balance < 0) {
      console.log(`Não é possível encerrar a conta pois há R$  ${this.#balance} de saldo. Para encerrar a conta é necessário que o saldo seja igual a zero`);
      return;
    } else {
      this.client = undefined;
      this.bank = undefined;
      this.accountNumber = undefined;
      this.agencyNumber = undefined;
      console.log(`Conta encerrada!`);
    }
  }
}
