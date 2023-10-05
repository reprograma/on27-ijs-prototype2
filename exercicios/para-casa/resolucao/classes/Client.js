

import { Bank } from "./Bank.js";
import { bank1, bank2} from "./Bank.js"; 

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
        if (!bank instanceof Bank) {
            return console.log("O parâmetro bank deve obrigatoriamente ser do tipo Bank.")
        }

        if (this.banks.includes(bank)) {
            return console.log("Cliente já tem esse banco associado a ele.");
        }else {
            this.banks.push(bank);
            bank.amountClients++;
        }

       
    }

    removeBank(bank) {
        const index = this.banks.findIndex(currentBank => currentBank.bankCode === bank.bankCode);

        if (index === -1) {
            console.log('Banco inválido');
        } else {
            this.banks.splice(index, 1);
            console.log(`O banco foi removido`);
        }
       
    }

}

const client1 = new Client('Maria', 123); 
console.log(client1); // { name: 'Maria', banks: [] }
console.log(client1.cpf); // 123

// Adicionando um banco a um cliente
client1.addBank(bank1); 
console.log(client1);


// Removendo um banco de um cliente
client1.removeBank(bank1); // Banco 100 removido da cliente Maria
console.log(client1); // { name: 'Maria', banks: [] }

const client2 = new Client('Maria', 1234); 
client2.addBank(bank2); 

export  {client1, client2}