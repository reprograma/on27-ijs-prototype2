import { Client, client1, client2 } from "./Client.js";
import { Bank, bank1, bank2 } from "./Bank.js";

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber) {
    if(client instanceof Client && bank instanceof Bank) {
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
    this.#balance += amount;
    console.log(`Crédito efetuado. Novo saldo é de ${this.#balance}.`);
  }

  debit(amount) {
    if(amount > this.#balance){
      console.log(`Valor indisponível para débito. Saldo atual é de ${this.#balance}.`)
    } else {
    this.#balance -= amount;
    console.log(`Débito efetuado. Novo saldo é de ${this.#balance}.`);
    }
  }

  transferTo(anotherAccount, amount) {
    if(!(anotherAccount instanceof BankAccount)) {
      console.log('Não foi possível realizar a transferência.')
      return;
    }
    if(amount > this.#balance) {
      console.log(`Valor indisponível para transferência. Saldo atual é de ${this.#balance}.`)
      return;
    }
    if(anotherAccount.bank !== this.bank) {
      anotherAccount.credit(amount);
      this.debit(amount * this.bank.transferTax);
      console.log(`Transferência concluída. Novo saldo é de ${this.#balance}.`);
    } else {
      anotherAccount += amount;
    }
  }

  closeAccount() {
    if(this.#balance > 0) {
      console.log(`Não foi possível encerrar a conta. Retire o valor total de ${this.#balance} para encerrar.`);
    } else {
      this.client = undefined;
      this.bank = undefined;
      this.accountNumber = undefined;
      this.agencyNumber = undefined;
      console.log('Conta encerrada com sucesso.')
    }
  }
}

const bankAccount1 = new BankAccount(client1, bank1, 12345, 111);
const bankAccount2 = new BankAccount(client2, bank2, 12345, 222);

// console.log(bankAccount1);
// bankAccount1.credit(250);
// bankAccount1.debit(50);
// bankAccount1.transferTo('account', 100);
// bankAccount1.transferTo(bankAccount2, 1000);
// bankAccount1.transferTo(bankAccount2, 100);
// bankAccount2.closeAccount();
// bankAccount2.debit(100);
// bankAccount2.closeAccount();