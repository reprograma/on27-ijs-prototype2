import { Bank } from './Bank.js';

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
            console.log('O banco deve ser uma instância de Bank');
            return;
        }
        if (this.banks.includes(bank)) {
            console.log(`O cliente já é cliente desse banco`);
            return;
        }

        this.banks.push(bank);
        Bank.createdBanks.find(b => b.code === bank.code).clientsCount++;
        console.log(`Banco ${bank.name} adicionado à cliente ${this.name}`);
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('O banco deve ser uma instância de Bank');
            return;
        }
        if (!this.banks.includes(bank)) {
            console.log(`O cliente não é cliente desse banco`);
            return;
        }

        this.banks = this.banks.filter(b => b.code !== bank.code);
        Bank.createdBanks.find(b => b.code === bank.code).clientsCount--;
        console.log(`Banco ${bank.name} removido do cliente ${this.name}`);
    }

    get cpf() {
        return this.#cpf;
    }
}
