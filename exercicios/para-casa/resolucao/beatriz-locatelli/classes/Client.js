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
        if (!(bank instanceof Bank)) {
            console.log('Banco inválido!');
            return;
        }
        if (this.banks.includes(bank)) {
            throw (`Banco já cadastrado ao cliente ${this.name}`)
        }
        this.banks.push(bank)
        Bank.createdBanks.find((a) => a.bankCode === bank.bankCode).numberOfClients++;
        console.log(`Banco ${bank.bankCode} adicionado ao(à) cliente ${this.name}`);
        
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('Banco inválido!');
            return;
        }
        let index = this.banks.indexOf(bank);
      
        if(index === -1) {
          throw ('Banco inválido');
        } else {
          this.banks = this.banks.filter(bankCode => bankCode !== bank);
          Bank.createdBanks.find((a) => a.bankCode === bank.bankCode).numberOfClients--;
          console.log(`O Banco ${bank.bankCode} foi removido do(a) cliente ${this.name}.`);
        }
      }
    

    get cpf() {
        return this.#cpf;
    }
}