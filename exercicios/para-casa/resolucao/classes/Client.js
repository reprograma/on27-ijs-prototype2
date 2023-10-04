import { Bank } from "./Bank.js";

export class Client {
    name;
    cpf;
    banks;
    numberOfBanks = 0

    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
        this.banks = []
        console.log("Cliente criado!")
    }

    addBank(bank) {

        if (!(bank instanceof Bank)) {
            console.log('Insira o banco corretamente!');
            return;
        }

        this.banks.map((bank) => {
            console.log(`O banco ${bank} já está associado ao cliente!`)
            return
        })

        this.banks.push(bank)
        console.log(`Banco ${bank.bankName} adicionado à cliente ${this.name}`)
        this.numberOfBanks++
        console.log(`Number + ${this.numberOfBanks}`)
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('Insira o banco corretamente!');
            return;
        }

        this.banks.splice(this.banks.indexOf(bank, 1))
        this.numberOfBanks--
        console.log(`Number - ${this.numberOfBanks}`)
    }
}