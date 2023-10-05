import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (!(client instanceof Client)) {
      throw new Error(
        "Parâmetro inválido!"
      );
    }

    if (!(bank instanceof Bank)) {
      throw new Error("Parâmetro inválido!");
    }

    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
  }

  get balance() {
    return this.#balance;
  }

  credit(amount) {
    this.#balance += amount;
    console.log(`Seu saldo é de: ${this.balance}`);
  }

  debit(amount) {
    this.#balance -= amount;
    console.log(`Seu saldo é de: ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {

    if (this.bank !== anotherAccount.bank) {
        const transferTax = this.bank.transferTax;
        console.log(`Transação entre bancos diferentes. Taxa de transferência aplicada: R$ ${(transferTax * amount).toFixed(2)}`)

        if (amount + transferTax * amount <= this.balance) {
            this.balance -= amount + (transferTax * amount)
            anotherAccount.balance += amount;

            console.log(`Transação realizada com sucesso. O valor de R$ ${amount.toFixed(2)} foi tranferido, seu novo saldo é de R$ ${this.#balance.toFixed(2)}`);
        }
        else {
            console.log('Saldo insuficiente para essa transação');
        }
    } else if (amount <= this.balance) {
        this.balance -= amount;
        anotherAccount.balance += amount;
        console.log(`Transação realizada com sucesso. O valor de R$ ${amount.toFixed(2)} foi tranferido, seu novo saldo é de R$ ${this.#balance.toFixed(2)}`);

    } else {
        console.log('Saldo insuficiente para essa transação');
    }
}

  closeAccount() {
    if (this.balance > 0) {
      console.log(`Seu saldo é de: ${this.balance}. Você não pode encerrar a conta.`
      );
      return;
    }

    console.log("Conta encerrada com sucesso");
  }
}

