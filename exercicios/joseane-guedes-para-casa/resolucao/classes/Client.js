import { Bank } from './Bank.js';

export class Client {
    name;
    #CPF;
    banks;

    constructor(name, CPF) {
        this.name = name;
        this.#CPF = CPF;
        this.banks = [];
    }

    addBank(bank) {
        if (this.banks.includes(bank)) {
            console.log(`O cliente ${this.name} já está associado a este banco.`);
        } else {
            this.banks.push(bank);
            bank.quantidadeClients++;
            console.log(`O cliente ${this.name} foi associado ao banco ${bank.bankName}.`);
        }
    }

    removeBank(bank) {
        if (!this.banks.includes(bank)) {
            console.log(`O cliente ${this.name} não está associado a este banco.`);
        } else {
            this.banks = this.banks.filter(existingBank => existingBank !== bank);
            bank.quantidadeClients--;
            console.log(`O cliente ${this.name} foi desassociado do banco ${bank.bankName}.`);
        }
    }
}




