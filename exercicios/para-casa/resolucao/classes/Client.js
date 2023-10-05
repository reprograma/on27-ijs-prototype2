import { Person } from './Person.js';
import { Bank } from './Bank.js';

export class Client extends Person {
  constructor(name, CPF) {
    super(name, CPF);
    this.banks = [];
  }

  addBank(bank) {
    if (!this.banks.includes(bank)) {
      this.banks.push(bank);
      bank.qtdClientes++;
      console.log(`Banco ${bank.code} adicionado à cliente ${this.name}`);
    } else {
      console.log(`A cliente ${this.name} já possui o banco ${bank.code} associado.`);
    }
  }

  removeBank(bank) {
    if (this.banks.includes(bank)) {
      this.banks.splice(this.banks.indexOf(bank), 1);
      bank.qtdClientes--;
      console.log(`Banco ${bank.code} removido da cliente ${this.name}`);
    } else {
      console.log(`A cliente ${this.name} não possui o banco ${bank.code} associado.`);
    }
  }
}