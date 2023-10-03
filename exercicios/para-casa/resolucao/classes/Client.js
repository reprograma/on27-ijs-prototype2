import { Bank } from "./Bank.js";
import { bank1, bank2, bank3 } from "./Bank.js";

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
            console.log("O parâmetro bank deve obrigatoriamente ser do tipo Bank");
            return;
        }

        if (this.banks.includes(bank)) {
            console.log(`O cliente ${this.name} já tem o banco ${bank.bankCode} associado a ele`);
        } else {
            this.banks.push(bank);
            bank.qtdClients++
            console.log(`Banco ${bank.bankCode} adicionado ao cliente ${this.name}`);
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log("O parâmetro bank deve obrigatoriamente ser do tipo Bank");
            return;
        }

        if (!this.banks.includes(bank)) {

            console.log(`O cliente ${this.name} não tem o banco ${bank.bankCode} associado a ele`);
            return
        } else {
            this.banks = this.banks.filter((findBank) => findBank !== bank)
            bank.qtdClients--
            console.log(`O banco ${bank.bankCode} foi removido do cliente ${this.name}`);
        }
    }
}

const client1 = new Client("Maria", 1234567899);
const client2 = new Client("Roxanie", 9876543321);
// client1.addBank(bank1)
// client1.addBank(bank1)

// client1.addBank(bank2)
// client2.addBank(bank2)
// client1.addBank(bank3);

// client1.removeBank(bank1)

// console.log(client1)
// console.log(client2);

export { client1, client2 }

