export class Bank {
    bankCode;
    bankName;
    numberOfClients;
    #transferTax;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax){
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.numberOfClients = 0;
        Bank.createdBanks.push({
            bankCode: this.bankCode,
            numberOfClients: this.numberOfClients
        })
    }

    get transferTax() {
        return this.#transferTax;
    }
    
    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax;
    }
}

export const bank1 = new Bank(100, 'NinaBank', 0.01);
export const bank2 = new Bank(200, 'SortBank', 0.01);
