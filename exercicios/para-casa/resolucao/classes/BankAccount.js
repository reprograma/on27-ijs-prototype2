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
        "O parâmetro client deve ser uma instância da classe Client"
      );
    }

    if (!(bank instanceof Bank)) {
      throw new Error("O parâmetro bank deve ser uma instância da classe Bank");
    }

    const isAssociated = client.banks.some(
      (clientBank) => clientBank.bankCode === bank.bankCode
    );
    if (!isAssociated) {
      throw new Error("Cliente não possui conta neste banco");
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
    console.log(
      `O crédito de R$ ${amount} foi realizado. O novo saldo da conta é de: R$ ${
        this.#balance
      }.`
    );
  }

  debit(amount) {
    if (amount > this.#balance) {
      throw new Error("Saldo insuficiente para a transação desejada.");
    } else {
      this.#balance -= amount;
      console.log(
        `Débito de R$ ${amount} foi realizado. O novo saldo da conta é de: R$ ${
          this.#balance
        } `
      );
    }
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      throw new Error(
        "O parâmetro anotherAccount deve ser uma instância da classe BankAccount"
      );
    }
    if (amount > this.#balance) {
      throw new Error("Saldo insuficiente para a transação desejada.");
    }

    if (this.bank === anotherAccount.bank) {
      this.#balance -= amount;
      anotherAccount.credit(amount);
      return console.log(
        `Transferência de R$ ${amount} realizada para a conta ${
          anotherAccount.accountNumber
        }. Novo saldo: R$ ${this.#balance}`
      );
    }

    const amountPlusTranferTax = amount + amount * this.bank.transferTax;
    if (amountPlusTranferTax <= this.#balance) {
      this.#balance -= amountPlusTranferTax;
      anotherAccount.credit(amount);
      console.log(
        `Transferência de R$ ${amount} realizada para a conta ${
          anotherAccount.accountNumber
        } em outro banco com taxa de ${this.bank.transferTax}. Novo saldo: R$ ${
          this.#balance
        }`
      );
    } else {
      console.log("Saldo insuficiente para a operação.");
    }
  }

  closeAccount() {
    if (this.#balance === 0) {
      console.log("Conta encerrada com sucesso.");
    } else {
      console.log("Não é possível encerrar a conta com saldo positivo.");
    }
  }
}
