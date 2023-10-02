export class Bank{
    bankCode;
    bankName;
    #transferTax;

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.clients = 0;
    }

    get transferTax(){
        return this.#transferTax;
    }

    set transferTax(tax){
        return this.#transferTax = tax;
    }

    static createdBanks = [];

    createBank(nameNewBank){
        this.bankCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        this.bankName = nameNewBank,
        this.clients = 0
        // Bank.createdBanks.push({ bankCode: this.bankCode, bankName: this.bankName, clients: this.clients })
        this.constructor.createdBanks.push({ bankCode: this.bankCode, bankName: this.bankName, clients: this.clients })
    }
}

