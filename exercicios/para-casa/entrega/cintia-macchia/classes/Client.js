import { Bank } from "./Bank.js"

export class Client {
    name 
    #cpf 
    banks 

    constructor(name, cpf){
        this.name = name;
        this.#cpf = cpf;
        this.banks = []

    }

    get cpf(){
        return this.#cpf
    }


    clientHasAccountInThisBank(bank) {
         return this.banks.find((clientBank) => clientBank.bankCode === bank.bankCode) !== undefined;
    }
   
      


    addBank(bank){
        if(! (bank instanceof Bank)){
           console.log("Informe um banco válido")
           return
        } 

        if(this.clientHasAccountInThisBank(bank)){
            console.log("Cliente já possui conta nesse banco")
            return
        }
         
        this.banks.push(bank);
        const createBankIndex = Bank.createdBanks.findIndex((bankIndex) => bankIndex.bankCode === bank.bankCode);
        Bank.createdBanks[createBankIndex].qtdClients++;
        console.log(`Banco ${bank.bankCode} adicionado ao cliente ${this.name}`);
    }


    remove(bank){
        if(! bank instanceof Bank){
            console.log("informe um banco válido")
        } 
     
        if(!this.clientHasAccountInThisBank(bank)){
            console.log("Cliente não possui conta nesse banco")
            return
        }
            
          
        this.banks = this.banks.filter((bankIndex) => bankIndex.bankCode !== bank.bankCode); 
        const removeBanckIndex = Bank.createdBanks.findIndex((bankIndex) => bankIndex.bankCode === bank.bankCode).qtdClients--
        console.log("Banco removido")
           
    }
}
   
    
