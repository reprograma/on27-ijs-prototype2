import { Bank } from "./Bank.js";

export class Client {
  name;
  #cpf;

  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }

  addBank(bank) {
    if (!this.banks.includes(bank)) {
      this.banks.push(bank);
      bank.qtdClients++;
      console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
    } else {
      console.log(`Cliente ${this.name} já possui o banco ${bank.bankCode} associado.`);
    }
  }

  removeBank(bank) {
    if (this.banks.includes(bank)) {
      const index = this.banks.indexOf(bank);
      this.banks.splice(index, 1);
      bank.qtdClients--;
      console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
    } else {
      console.log(`Cliente ${this.name} não possui o banco ${bank.bankCode} associado.`);
    }
  }
}