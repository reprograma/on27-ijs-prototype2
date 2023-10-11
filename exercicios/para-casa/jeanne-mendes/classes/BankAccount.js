import { Client } from "./Client.js";
import { Bank } from "./Bank.js"

export class BankAccount {
    client = Client;
    bank = Bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber, agencyNumber) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber =agencyNumber;
        this.#balance = 0;

    }

    get balance() {
        return this.#balance;
    }
        
    creditAmount(amount){
        this.#balance += amount;
        console.log(`Foi creditado o valor de ${amount}. O saldo atual é de ${this.#balance}`)
    }

    debitAmount(amount){
        if(this.balance >= amount){
            this.#balance -= amount;
            console.log(`Debito de ${amount}. O saldo atual é de ${this.#balance}`);
        }
        else console.log(`O saldo não é suficiente para essa operação.`);
            
    }
        
    transferTo(anotherAccount, amount) {
        if(anotherAccount instanceof BankAccount){
            if(amount <= this.#balance){
                if(anotherAccount.bank !== this.bank){
                    anotherAccount.#balance += amount;
                    console.log(`Transferencia de ${amount} foi realizada para a conta de ${anotherAccount.client.name}.`);
                    this.#balance -= amount + (amount * this.bank.transferTax);
                }
                else{
                    anotherAccount.#balance += amount;
                    console.log(`Transferencia de ${amount} foi realizada para a conta de ${anotherAccount.client.name}.`);
                    this.#balance -= amount;
                }
            }
    
            else console.log(`A transferência não foi realizada. Conta de ${this.client.name} não tem saldo suficiente.`)
        }

        else return;

    }

    closeAccount() {

        if(this.#balance === 0){
            this.client = undefined;
            this.bank = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            this.#balance = 0;
        }
        else{
            if(this.#balance >= 0){
                console.log(`A conta não pode ser encerrado pois possui saldo ${this.#balance}`);
            }
                
            else { console.log(`Conta contem débitos. Procure a agência.`);}
        }
        
    }

}
