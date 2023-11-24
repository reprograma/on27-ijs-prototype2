export class Bank {
    #transferTax;


    static createdBanks = []

    constructor(bankCode, bankName, transferTax){
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        Bank.createdBanks.push({
            bankCode: this.bankCode,
            QtdClients : 0
        })
    }

    set transferTax(newTransferTax){
        this.#transferTax = newTransferTax
        return
    }

    get transferTax(){
        return this.#transferTax
    }


    
}