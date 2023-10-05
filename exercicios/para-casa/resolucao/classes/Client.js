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
    if(!(bank instanceof Bank)){
        console.log("Não é instancia de Banco");
        return;
    }

    if (!this.banks.includes(bank)) {
      this.banks.push(bank);
      console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
      bank.qtdClients++;
    } else {
      console.log(`Cliente ${this.name} já possui o banco ${bank.bankCode} associado.`);
    }
  }

  removeBank(bank) {
    if(!(bank instanceof Bank)){
        console.log("Não é instancia de Banco");
        return;
    }

    if (this.banks.includes(bank)) {
      const index = this.banks.indexOf(bank);
      this.banks.splice(index, 1);
      console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
      bank.qtdClients--;
    } else {
      console.log(`Cliente ${this.name} não possui o banco ${bank.bankCode} associado.`);
    }
  }
}

export const client1 = new Client("Maria", 12345678900);
export const client2 = new Client("Sandra", 12345678967);
