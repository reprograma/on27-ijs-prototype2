import { Bank, bank1, bank2 } from "./Bank.js";

export class Client {
  name;
  cpf;
  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }

  addBank(bank) {
    if (bank instanceof Bank === false) {
      throw "O banco deve estar cadastrado!";
    }

    if (this.banks.indexOf(bank) !== -1) {
      throw "A pessoa cliente já tem esse banco em seu registro!";
    }

    const bankAdded = Bank.createdBanks.find((e) => (e.bankCode === bank.bankCode));
    bankAdded.amountClients = bankAdded.amountClients +1;
    this.banks.push(bank);
  }

  removeBank(bank) {
    if (bank instanceof Bank === false) {
      throw "O banco deve estar cadastrado!";
    }

    if (this.banks.indexOf(bank) === -1) {
      throw "A pessoa cliente já tem esse banco em seu registro!";
    }
    const removeClient = Bank.createdBanks.find((e) => (e.bankCode === bank.bankCode));
    removeClient.amountClients = removeClient.amountClients -1;
    const bankRemoved = this.banks.indexOf(bank);
    this.banks.splice(bankRemoved, 1);
  }
}

export const client1 = new Client("Maria", 123);

export const client2 = new Client("Sandra", 789);