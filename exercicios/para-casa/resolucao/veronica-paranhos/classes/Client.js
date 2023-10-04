import { Bank, bank1, bank2 } from "./Bank.js";

export class Client {
  name;
  #cpf;

  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }

  addBank(bank) {
    if (!(bank instanceof Bank))
      return console.log("O parâmetro é inválido! Banco não adicionado.");

    if (this.banks.includes(bank)) return console.log("Banco já cadastrado!");

    this.banks.push(bank);
    console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
    Bank.createdBanks.find((e) => e.bankCode === bank.bankCode).qtdClients++;
  }

  removeBank(bank) {
    if (!(bank instanceof Bank))
      return console.log("O parâmetro é inválido! Banco não removido.");

    if (!this.banks.includes(bank))
      return console.log(
        "O banco que você está tentando remover não está cadastrado!"
      );

    this.banks = this.banks.filter((bankCode) => bankCode !== bank);
    console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
    Bank.createdBanks.find((e) => e.bankCode === bank.bankCode).qtdClients--;
  }
}

export const client1 = new Client("Maria", 12345678900);
export const client2 = new Client("Sandra", 12345678967);
// client1.addBank(bank1);
// client1.addBank(bank2);
// client2.addBank(bank1);
// client2.addBank(bank2);

// // console.log(client1);
// // // console.log(client2);
// // console.log(Bank.createdBanks);
// client1.removeBank(bank1);
// // // console.log(client1);
// // // console.log(client2);
// console.log(Bank.createdBanks);
