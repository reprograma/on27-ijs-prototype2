import { Bank } from './Bank.js';

export class Client {
  name;
  #cpf;

  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }

  get cpf() {
    return this.#cpf;
  }

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log('Não é um banco!');
      return;
    }

    if (this.banks.includes(bank)) {
      console.log('Você já se associou a esse banco antes!');
      return;
    }

    const selectedBank = Bank.createdBanks.find(
      (selectedBank) => selectedBank.bankCode === bank.bankCode,
    );
    selectedBank.customerCount++;
    this.banks.push(bank);
    console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log('Não é um banco!');
      return;
    }

    let index = this.banks.indexOf(bank);
    if (index === -1) {
      console.log('Banco inválido!');
      return;
    }

    const selectedBank = Bank.createdBanks.find(
      (selectedBank) => selectedBank.bankCode === bank.bankCode,
    );
    selectedBank.customerCount--;
    this.banks.splice(index, 1);
    console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
  }
}
