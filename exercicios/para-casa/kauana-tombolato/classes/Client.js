import { Bank } from "./Bank.js";

export class Client {
  #cpf

  constructor(name, cpf) {
    this.name = name
    this.#cpf = cpf
    this.banks = []
  }

  addBank(bank) {
    // Verifica se bank é uma instância da classe Bank
    if (bank instanceof Bank) {
      if (this.banks.includes(bank)) {
        return console.log("Esse banco já está cadastrado");
      } else {
        this.banks.push(bank);
        // Encontre o banco correspondente no array createdBanks
        const bankSelected = Bank.createdBanks.find(b => b.bankCode === bank.bankCode);
  
        if (bankSelected) {
          // Aumenta a quantidade de clientes no banco correspondente
          bankSelected.qtdClients++;
        } else {
          console.log("Banco não encontrado");
        }
      }
    } else {
      console.log("Esse banco não está cadastrado");
    }
  }
  
  removeBank(bank) {
    // Verifica se bank é uma instância da classe Bank
    if (bank instanceof Bank) {
      const index = this.banks.indexOf(bank);
      if (index !== -1) {
        this.banks.splice(index, 1); // Remove o banco da lista
        // Encontre o banco correspondente no array createdBanks
        const bankSelected = Bank.createdBanks.find(b => b.bankCode === bank.bankCode);
        if (bankSelected) {
          // Diminui a quantidade de clientes no banco correspondente
          bankSelected.qtdClients--;
        } else {
          console.log("Banco não encontrado");
        }
        console.log(`Banco ${bank.bankCode} removido do cliente ${this.name}`);
      } else {
        console.log(`Banco ${bank.bankCode} não está associado ao cliente ${this.name}`);
      }
    } else {
      console.log("Esse banco não está cadastrado");
    }
  }

  get cpf() {
    return this.#cpf
  }
}