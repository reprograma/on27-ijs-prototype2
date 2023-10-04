import { Bank } from './Bank.js'

export class Client{
    name;
    #CPF;
    banks;
    
    constructor(name, CPF) {
        this.name = name;
        this.#CPF= CPF;
        this.banks =[];
    }

    addBank(bank){
        if(!(bank instanceof Bank)){
            console.log('Banco não cadastrado!');
           return;
        }else{
            if(this.banks.includes(bank.bankName)){
                console.log("Não é necessario incluir o banco")
            }else{
                bank.numberOfClients += 1
                this.banks.push(bank.bankName)
                console.log(bank.numberOfClients)
            }}
    }
    removeBank(bank){
        if(!(bank instanceof Bank)){
            console.log('Banco não cadastrado!');
            return;
           }else{
                if(!(this.banks.includes(bank.bankName))){
                   console.log("Não é necessario remover o banco")
                }else{
                    bank.numberOfClients -= 1
                    this.banks = this.banks.filter(itemAtual => itemAtual != bank.bankName)
                    //this.banks = this.banks.filter(nomedobanco => nomedobanco !== bank.name);
                    console.log(bank.numberOfClients)
        }}
        
    }
}
//Testando Objetos e Métodos Criados através da classe Cliente

const cliente1 = new Client("Elis", 123)
const bank1= new Bank(100, "Banco do Brasil", 0.01)
cliente1.addBank(bank1)
console.log(cliente1)
console.log(bank1)
cliente1.removeBank(bank1)
console.log(cliente1)
console.log(bank1)
const cliente2 = new Client("Matheus", 456)

