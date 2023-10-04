import { Bank } from './Bank.js'


class Client{
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
            return
        }
        if(this.banks.includes(bank)){
            console.log("Não é necessario incluir o banco")
        }else{
            this.banks.push(bank)
            this.numberOfClients += 1
        }
    }
}
const Nubank = new Bank(11, "Nubank", 10)
const cliente1 = new Client("Elis", 123)
console.log(cliente1)
cliente1.addBank("Nubank")

const cliente2 = new Client("Matheus", 456)
cliente2.addBank(Nubank)
