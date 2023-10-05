export class Bank {
    bankCode;
    bankName;
    #transferTax;
    totalClients

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.totalClients = 0;
        Bank.createdBanks.push({ bankCode: this.bankCode, totalClients: this.totalClients });
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax;
    }
}


//testando 1,2,3 

const bank1 = new Bank(666, 'BeastBank', 0.01);
const bank2 = new Bank(999, 'KarmaBank', 0.02);

console.log(Bank.createdBanks)
console.log("Banco 1:", bank1);
console.log("Banco 2:", bank2);

console.log(bank1.transferTax)
console.log(bank2.transferTax)




