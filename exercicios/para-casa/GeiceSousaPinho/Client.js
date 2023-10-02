import { Bank } from "./Bank.js";

export class Client {
    banks;
    name;
    #CPF;

    constructor(name, CPF) {
        this.name = name;
        this.#CPF = CPF;
        this.banks = []
    }

    addBank(bank){
        if (bank instanceof Bank){
            if(this.banks.includes(bank)){
                console.log(`O banco ${bank} já está associado ao cliente.`)
                return
            } else {
                this.banks.push(bank);
                bank.clients++;
            }
        }
    }
    
    removeBank(bank){
        if (bank instanceof Bank){
            const indexBankDelete = this.banks.indexOf(bank)
            
            if (indexBankDelete === 0) {
                console.log(`O banco ${bank} não está associado ao cliente.`)
                return
            }

            this.banks.splice(indexBankDelete, 1)
            bank.clients--;
        }
    }
}

