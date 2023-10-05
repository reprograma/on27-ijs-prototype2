import { Client } from "./Client.js";
import { Bank } from "./Bank.js";
export class BankAccount {
  #balance = 0

  constructor(client, bank, accountNumber, agencyNumber) {
    this.client = client
    this.bank = bank
    this.accountNumber = accountNumber
    this.agencyNumber = agencyNumber
  }

  get balance() {
    return this.#balance
  }

  credit(amount) {
    this.#balance += amount
    console.log(`O novo saldo da conta é: ${this.balance}`);
  }

  debit(amount) {
    this.#balance -= amount
    console.log(`O novo saldo da conta é: ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount) {
      if (this.balance < amount) {
        console.log(`Você não tem saldo suficiente para realizar essa transação`);
      } else if (this.bank.bankCode != anotherAccount.bank.bankCode) {
        this.#balance -= ( amount + (this.bank.transferTax * amount))
        anotherAccount.#balance += amount
        console.log(`Devido os bancos serem diferentes, houve a cobrança referente a taxa`);
        console.log(`${this.balance} || ${anotherAccount.balance}`);
      } else {
        this.#balance -= amount
        anotherAccount.#balance += amount
        console.log(`Transferência realizada com sucesso!`);
        console.log(`${this.balance} || ${anotherAccount.balance}`);
      }
    }
  }

  closeAccount() {
    if (this.#balance != 0) {
      console.log(`Você não pode excluir essa conta, pois seu saldo é de ${this.balance}`);
    } else {
      this.client = undefined
      this.bank = undefined
      this.accountNumber = undefined
      this.agencyNumber = undefined
      console.log(`Conta encerrada`);
    }
  }
}