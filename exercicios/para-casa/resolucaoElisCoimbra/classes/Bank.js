
export class Bank {
    bankCode;
    bankName;
    #transferTax;
    numberOfClients =0;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax){
        this.bankCode = bankCode;
        this.bankName = bankName;
        //falta a propriedade get e set
        this.#transferTax = transferTax;
        this.numberOfClients = 0;
        // falta a quantidade de clientes que esse banco possui
        this.constructor.createdBanks.push({bankCode:bankCode, numberOfClients: this.numberOfClients})
    }

    get transferTax(){
        return this.#transferTax;
    }
    set transferTax(newTax){
        this.#transferTax = newTax
    }
}

//Testando Objetos Criados através dessa classe

const bank1= new Bank(100, "Banco do Brasil", 0.01)

const bank2= new Bank(200, "Nubank", 0.02)
console.log(bank1)
console.log(bank2)
console.log(Bank.createdBanks)
console.log(bank1.transferTax)
console.log(bank1.numberOfClients)

