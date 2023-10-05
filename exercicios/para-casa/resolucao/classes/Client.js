import { Bank, bank1, bank2 } from './Bank.js';

export class Client {
    name;
    #CPF;
    banks;

    constructor(name, CPF) {
        this.name = name;
        this.#CPF = CPF;
        this.banks = [];
    }

    get CPF() {
        return this.#CPF;
    }

    addBank(bank) {
        if(!(bank instanceof Bank)) {
            // throw ('O parâmetro bank é inválido, precisa ser uma instância da classe Bank');
            return console.log('O parâmetro bank é inválido, precisa ser uma instância da classe Bank');
        }
    
        if(this.banks.includes(bank)) {
            // throw (`Banco já cadastrado ao cliente ${this.name}`);
            return console.log(`Este Banco não foi adicionado pois já está cadastrado ao cliente ${this.name}`);
        }

        this.banks.push(bank)

        Bank.createdBanks.find((banco) => banco.bankCode === bank.bankCode).numbersClients += 1;
        console.log(`O Banco ${bank.bankCode} foi adicionado ao cliente ${this.name}`);
    }

    removeBank(bank) {
        if(!(bank instanceof Bank)) {
            return console.log('O parâmetro bank é inválido, precisa ser uma instância da classe Bank');
        }

        // Guardando em uma variável o index que o cliente passado está na array []
        const indexBank = this.banks.findIndex((cliente) => cliente.bankCode === bank.bankCode);
    
        // Se o findIndex não achar nenhum que satisfaça a condição passada, ele retorna -1, então devolvemos uma mensagem de erro
        if(indexBank === -1) {
            return console.log(`O cliente ${this.name} não possui conta no banco ${bank.bankName}`);
        }

        // O splice substitui o array original, adiciona e/ou remove elementos do array []
        this.banks.splice(indexBank, 1);

        Bank.removeClient(bank);
        console.log(`Banco ${bank.bankName} foi removido do cliente ${this.name}.`);
    }
}

const client1 = new Client('Maria', 123);
const client2 = new Client('Carol', 432);

console.log(client1);
console.log(client2);

console.log(client1.CPF);
console.log(client2.CPF);

client1.addBank(bank1);
client2.addBank(bank2);

console.log(client1);
console.log(client2);

client1.removeBank(bank1);
console.log(client1);