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
    if(!(bank instanceof Bank)) {
      console.log('Não foi possível criar o banco');
      return;
    }
    if (this.banks.includes(bank)) {
      console.log('O cliente já está associado a este banco');
      return;
    }
    this.banks.push(bank);
    // Bank.createdBanks -> percorrer esse array (metodo find?) p/ encontrar o banco correspondente ao que o cliente esta sendo associado e aumentar em 1 (++) o numero de clientes
    console.log(`Cliente ${this.name} foi associado(a) ao banco ${this.bank}`);
  }

  removeBank(bank) {
    if(!(bank instanceof Bank)) {
      console.log('Não foi possível remover o banco');
      return;
    }
    if (!(this.banks.includes(bank))) {
      console.log('O cliente não é associado a este banco');
      return;
    }
    const bankIndex = this.banks.indexOf(bank);
    Client.banks.slice(bankIndex, 1);
    console.log(`O cliente foi desassociado do banco ${this.bank}`);
    return this.banks;
  }
}

const client1 = new Client('Melina Osik', 14462751900);
console.log(client1);