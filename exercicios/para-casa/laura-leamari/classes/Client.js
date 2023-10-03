import { Bank } from './Bank.js'

export class Client {
  name;
  #cpf;

  constructor(name, cpf){
    this.name = name;
    this.#cpf = cpf;
    this.banks = []
  }

  addBank(bank){
    if(!(bank instanceof Bank)) {
      console.log('O cliente já esta associado a este banco.');
      return;
    }
    this.banks.push(bank);
    Bank.createdBanks.find((qty) => qty.bankCode === bank.bankCode).qtdClients++;
  }

  removeBank(bank){
    if(!(bank instanceof Bank)) {
      console.log('O cliente não possue este banco.');
      return;
    }

    this.banks = this.banks.filter(currentBank => currentBank !== bank);
    console.log(`O cliente foi removido do banco ${bank.bankName}.`);
    Bank.createdBanks.find((qty) => qty.bankCode === bank.bankCode).qtdClients--;
  }

}