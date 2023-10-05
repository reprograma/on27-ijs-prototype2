import { Bank } from './Bank.js';
import { Client } from "./Client.js";

export class BankAccount {

  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber) {
    if(client instanceof Client && bank instanceof Bank){
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    } 
  }

  get balance() {
    return this.#balance;
  }

  credit(amount) {
    if(amount > 0){
        this.#balance += amount;
        console.log(`O novo saldo da conta é: ${this.#balance}`);    
    }else{
        console.log("Valor inválido");
    }
  }

  debit(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`O novo saldo da conta é: ${this.#balance}`);    
    } else {
      console.log('Você não tem saldo suficiente para essa operação.');
    }
  }

  transferTo(anotherAccount, amount) {
    let tax = 0;

    if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
      tax = this.bank.TransferTax;
      console.log(`Essa transferência terá uma taxa de ${tax*100}%, pois se trata de uma transferência entre bancos diferentes.`);
    }

    const amountToDebit = amount + (amount * tax);

    if (this.#balance >= amountToDebit) {
      this.#balance -= amountToDebit;
      anotherAccount.#balance += amount;
      console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
      console.log(`O saldo atual da conta de destino é de R$ ${anotherAccount.#balance}`);
    } else {
        console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${this.#balance}. Para realizar essa transferência você precisa ter ${amountToDebit} em conta.`);
    }
  }

  closeAccount() {
    if (this.balance === 0) {
      this.client = undefined;
      this.bank = undefined;
      this.accountNumber = undefined;
      this.agencyNumber = undefined;
      console.log("Conta encerrada!");
    } else {
      console.log(`Você possui um saldo de R$ ${this.#balance}. Para encerrar a conta é necessário que o saldo seja igual a zero.`);
    }
  }
}
