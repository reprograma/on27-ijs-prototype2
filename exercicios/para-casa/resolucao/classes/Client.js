import { Bank, bank1, bank2 } from "./Bank.js";

class Client {
  name;
  #cpf;
  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }

  addBank(bank) {
    if(!(bank instanceof Bank)) {
      console.log('Não foi possível associar cliente ao banco');
      return;
    }
    if (this.banks.includes(bank)) {
      console.log('O cliente já é associado a este banco');
      return;
    } else {
    this.banks.push(bank);
    const bankFound = Bank.createdBanks.find((existingBanks) => existingBanks.bankCode === bank.bankCode);
    bankFound.qtdClients++
    console.log(`Cliente ${this.name} foi associado(a) ao banco ${bankFound.bankCode}`);
    }
  }

  removeBank(bank) {
    if(!(bank instanceof Bank)) {
      console.log('Não foi possível remover o banco');
      return;
    }
    if (!(this.banks.includes(bank))) {
      console.log('O cliente não é associado a este banco');
      return;
    } else {
    const bankIndex = this.banks.indexOf(bank);
    this.banks.splice(bankIndex, 1);
    const bankFound = Bank.createdBanks.find((existingBanks) => existingBanks.bankCode === bank.bankCode);
    bankFound.qtdClients--
    console.log(`O cliente foi desassociado do banco ${bank.bankCode}`);
    }
  }
}

const client1 = new Client('Melina Osik', 12345678900);
const client2 = new Client('Ileana Silveira', 12345678090);

// client1.addBank(bank1);
// client1.addBank(bank2);
// client1.addBank(bank1);
// console.log(Bank.createdBanks);
// console.log(client1.cpf);
// client1.removeBank('bank');
// client1.removeBank(bank1);
// client1.removeBank(bank1);
// console.log(Bank.createdBanks);

export { Client, client1, client2 }