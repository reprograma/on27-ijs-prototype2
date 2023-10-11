import {Bank} from './Bank.js'

export class Client {
    name;
    #cpf;
    banks;

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }

    get cpf() {
        return this.#cpf;
    }

    addBank(bank) {
        if(!(bank instanceof Bank)) {
            console.log('O cliente já esta associado a este banco.');
            return;
          }
        this.banks.push(bank);
        Bank.createdBanks.find(b => b.code === bank.bankCode).qtdClientes++;
        
    }

    removeBank(bank) {
        if(!bank instanceof Bank)
            console.log(`Não existe esse banco vinculado ao cliente ${this.name}`);
        else {
            this.banks.pop(bank);
            Bank.createdBanks.find(b => b.code === bank.bankCode).qtdClientes--;
            

        }
            


    }

}

export const client1 = new Client('Maria', 68432345678);
export const client2 = new Client('Ana Paula', 34576854399);
//export const client3 = new Client('Valéria', 34576587944);