import { Bank } from "./Bank.js";

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
      throw new Error("O parâmetro bank deve ser uma instância da classe Bank");
    }

    const isAssociated = this.banks.some(
      (clientBank) => clientBank.bankCode === bank.bankCode
    );

    if (isAssociated) {
      console.log(`O cliente já possui o banco ${bank.bankName} associado.`);
    } else {
      this.banks.push(bank);
      Bank.associateClient(bank);
      console.log(`Banco ${bank.bankName} associado ao cliente ${this.name}.`);
    }
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      throw new Error("O parâmetro bank deve ser uma instância da classe Bank");
    }

    const bankIndex = this.banks.findIndex(
      (clientBank) => clientBank.bankCode === bank.bankCode
    );

    if (bankIndex === -1) {
      console.log(
        `O cliente ${this.name} não possui o banco ${bank.bankName} associado.`
      );
    } else {
      this.banks.splice(bankIndex, 1);
      Bank.removeClient(bank);
      console.log(`Banco ${bank.bankName} removido do cliente ${this.name}.`);
    }
  }
}
