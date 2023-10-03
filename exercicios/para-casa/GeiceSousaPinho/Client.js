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
                Bank.clients++; 
            }
        }
    }
    
    removeBank(bank){
        if (bank instanceof Bank){
            const indexBankDelete = this.banks.indexOf(bank) // a posicçãod dentro do array
            
            if (indexBankDelete === -1) {
                console.log(`O banco ${bank} não está associado ao cliente.`)
                return
            }

            this.banks.splice(indexBankDelete, 1)
            bank.clients--;
        }
    }
}

// const client1 = new Client('Maria', 123);
// const client2 = new Client('Geice', 321);

// client1.addBank(bank1); 
// client1.addBank(bank2);

// console.log(client1); 

// export { client1, client2, Client }
