import { Bank } from './Bank.js'
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
            console.log(`O parâmetro é inválido.`)
            return;
        }
        // TODO: cliente com conta  no banco X
        if () {
            console.log(`Cliente já possui conta no banco ${}.`)
        }
        //TODO: corrigir. se sair do laço, qual é o parâmetro a ser chamado?
        this.banks.push(bank)

    }
    // TODO: cliente com conta criada
    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log(`O parâmetro é inválido.`)
        }
        // TODO: cliente SEM conta  no banco X
        if () {
            console.log(`Não é possível remover. Cliente não tem conta no banco ${}.`)
        }
    }
}