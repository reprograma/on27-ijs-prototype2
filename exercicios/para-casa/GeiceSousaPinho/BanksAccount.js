import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    constructor(client, bank, accountNumber, agencyNumber){
        if(client instanceof Client && bank instanceof Bank){
            this.client = client;
            this.bank = bank;
            this.accountNumber = accountNumber;
            this.agencyNumber = agencyNumber;
            this.#balance = 0;

        }
    }
        get balance(){
            return this.#balance;
        }

        credit(amount){
            this.#balance += amount;
            console.log(`R$${amount} foi adicionado a sua conta. O crédito atual é R$${this.#balance}.`)
        }

        debit(amount){
            this.#balance -= amount;
            console.log(`R$${amount} foi retirado de sua conta. O crédito atual é R$${this.balance}.`)
        }

        transferTo(anotherAccount, amount){
            if (anotherAccount instanceof BankAccount){
                if(this.#balance < amount) console.log(`Saldo insuficiente. O valor disponível é de R$${this.#balance}.`)

                if (this.bank != anotherAccount.bank && this.#balance >= amount){
                    this.#balance = anotherAccount.transferTax + amount;
                    console.log(`Transferência de R$${amount} realizada com sucesso. Taxa de transferência cobrada R$${anotherAccount.transferTax}. Seu saldo atual é R$${this.#balance}.`)
                } 
                else if (this.bank != anotherAccount.bank && this.#balance <= amount) {
                    console.log(`Saldo insuficiente. O valor disponível é de R$${this.#balance}.`)
                }
                else{
                    this.#balance -= amount;
                    console.log(`Transferência de R$${amount} realizada com sucesso para Agencia: ${anotherAccount.agencyNumber} - Conta: ${anotherAccount.accountNumber}.`)
                }
            };         
        }

        closeAccount(){
            if(this.#balance > 0){
                console.log(`Não é possível encerrar a conta. O saldo disponível é R$${this.#balance}.`)
            }

            this.client = undefined;
            this.bank = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            this.#balance = 0;
            console.log(`Conta encerrada com sucesso.`)
        }
}

const client1 = new Client('Maria', 123);
const client2 = new Client('Geice', 321);
const bank1 = new Bank(100, 'LuaBank', 0.01); 
const bank2 = new Bank(200, 'GeiceBank', 0.02); 
const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); 
const bankAccount2 = new BankAccount(client2, bank2, 2222, 3333); 
console.log(bankAccount1.balance); 
bankAccount1.credit(1000); 
bankAccount1.debit(300);
bankAccount1.transferTo(bankAccount2, 200); 

// Transferência de R$${amount} realizada com sucesso. Taxa de transferência cobrada R$${anotherAccount.transferTax}. Seu saldo atual é R$${this.#balance}.
// anotherAccount.transferTax dá undefined e this.#balance da NaN

// export { bank1, bank2, BankAccount }
