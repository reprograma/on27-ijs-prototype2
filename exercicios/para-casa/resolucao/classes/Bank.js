

export class Bank {
    bankCode;
    bankName;
    #transferTax; 
    amountClients;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.amountClients = 0;
        this.constructor.createdBanks.push({ bankCode: this.bankCode, amountClients: this.amountClients});
    }
    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax;
    }


   

}

//class Bank
const bank1 = new Bank(100, 'LuaBank', 0.01); 
const bank2 = new Bank(100, 'LuaBank', 0.01); 
console.log( bank1); 
console.log(Bank.createdBanks);
console.log(bank1.transferTax)
bank1.transferTax = 0.02
console.log(bank1.transferTax);

export { bank1, bank2 }