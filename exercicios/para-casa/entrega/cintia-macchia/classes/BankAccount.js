import { Bank } from "./Bank.js"
import { Client } from "./Client.js"

 export class BankAccount {
    client 
    bank 
    accountNumber
    agencyNumber
    #balance 


    constructor(client, bank, accountNumber, agencyNumber, balance){
       if(!client instanceof Client) {
        console.log("Infome um cliente válido")
       }

        if(!bank instanceof Bank){
        console.log("Informe um banco válido")
        return
       }

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.balance = 0
    }

    get balance(){
        return this.#balance
    }

    set balance(newBalance){
        return this.#balance = newBalance
    }

    credit(amount){
        this.#balance += amount
        console.log(`Seu saldo atual é ${this.#balance}`)
    }

    debit(amount){
        if(this.#balance >= amount){
          this.#balance -+ amount
          console.log(`Seu saldo atual é ${this.#balance}}`)
        } else{
            console.log("saldo insuficuente")
        }
    }

    transferTo(anotherAccount, amount){
        if (! anotherAccount instanceof BankAccount){
            console.log("Digite uma conta válida")
            return
        }

        const tax = this.bank !== anotherAccount.bank ? this.bank.transferTax : 0;
        const totalAmount = amount + (amount * tax);
    
        if (totalAmount <= this._balance) {
            this._balance -= totalAmount;
            anotherAccount.credit(amount);
            console.log(`Transferência de ${amount} realizada. Novo saldo: ${this._balance}`);
        } else {
        console.log("Saldo insuficiente para realizar a transferência.");
        }
    }
        

   closeAccount() {
        if (this._balance === 0) {
            console.log("Conta encerrada com sucesso.");
        } else {
      console.log("Não é possível encerrar uma conta com saldo diferente de zero.");
        }
    }

}
