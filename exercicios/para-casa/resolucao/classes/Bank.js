export class Bank {
    bankCode;
    bankName;
    #transferTax; 
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.qtdClients = 0
        this.constructor.createdBanks.push({ bankCode: this.bankCode, qtdClients:this.qtdClients });
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(amountTax) {
        this.#transferTax = amountTax;
    }

}

const bank1 = new Bank(100, 'LuaBank', 0.01);
const bank2 = new Bank(789, 'RepoBank', 0.03);
const bank3 = new Bank(333, 'GramaBank', 0.03);

// console.log(Bank.createdBanks);

export { bank1, bank2, bank3 }
