import { Bank } from "./Bank.js";

export class Client {
    name; // a ordem colocada aqui interfere em como aparece no console
    banks;
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

// const client1 = new Client('Maria das Dores', 123);
// const client2 = new Client('Geice Conceição', 321);

// const bankGeice = new Bank(100, 'GeiceBank', 10); 
// const bankLua = new Bank(200, 'LuaBank', 20); 
// const bank1 = new Bank(800, 'BankBank', 5);

// client2.addBank(bankGeice); 
// client2.addBank(bank1); 
// client1.addBank(bank1); 
// client1.addBank(bankLua);

// console.log(client1); 
// console.log(`CPF: ${client1.cpf}`);
// console.log()
// console.log(client2); 
// console.log(`CPF: ${client2.cpf}`);

// client2.removeBank(bank1); 
// client1.removeBank(bank1); 

// console.log(client1); 
// console.log(client2); 
// export { client1, client2, Client }
