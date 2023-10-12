import {Person} from './Person.js';
import { Bank, bank1, bank2 } from "./Bank.js";

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
            console.log("Não é um banco válido!");
            return;
        }

        if (this.banks.includes(bank)) {
            console.log(`O cliente ${this.name} já tem o banco ${bank.bankCode} associado a ele`);
        } else {
            this.banks.push(bank);
            bank.qtdClients++
            console.log(`Banco de código: ${bank.bankCode} adicionado ao cliente ${this.name}`);
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log("Não é um banco válido!");
            return;
        }

        if (!this.banks.includes(bank)) {

            console.log(`O cliente ${this.name} não tem o banco ${bank.bankCode} ${bank.bankName} associado a ele`);
            return
        } else {
            this.banks = this.banks.filter((findBank) => findBank !== bank)
            bank.qtdClients--
            console.log(`O banco ${bank.bankCode} foi removido do cliente ${this.name}`);
        }
    }
}
