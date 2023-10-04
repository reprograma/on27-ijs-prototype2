import { Bank } from './Bank.js'
import { Client } from './Client.js'

class BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance =0;
    constructor(client, bank, accountNumber, agencyNumber){
        if((client instanceof Client)){
            this.client = client;
            this.bank = bank;
        }
        if((bank instanceof Bank)){

        }
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance= 0;
    }
    get balance(){
        return this.#balance

    }
    credit(amount){
        if(amount <=0){
            console.log(`Não é possível efetuar a operação`);
            return;
        }
        this.#balance = this.#balance + amount
        console.log(`Foi feito o credito de ${amount} na conta bancária`);
    }
    debit(amount){
        if(amount<=0){
            console.log("Não é possível efetuar a operação");
        }if(amount>= this.#balance){
            console.log(`Não a saldo suficiente para efetuar a operação`);
            return;
        }else{
            this.#balance = this.#balance - amount
            console.log(`Foi feito o débito de ${amount} na conta`)
        }}
        
    transferTo(anotherAccount, amount){
        if((anotherAccount instanceof BankAccount)){
            if(amount> this.#balance){
                return (`Não é possível efetuar a operação!`);
            }
            if(anotherAccount.bank.code!== this.bank.code){
                console.log(`É necessário se cobrar uma taxa`)
            }
        }
    }

    
    closeAccount(){
        if(this.#balance>=0){
            console.log(`É necessário fazer o saque total para encerrar a conta`)
        }else{
            console.log(`Conta encerrada!`)
        }
    }
}