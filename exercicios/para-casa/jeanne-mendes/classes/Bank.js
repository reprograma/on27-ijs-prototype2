export class Bank {

    bankCode;
    bankName;
    #transferTax;
    qtdClients

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;      
        this.qtdClients = 0
        Bank.createdBanks.push({code: this.bankCode, qtdClientes: this.qtdClients});
    }

    get transferTax() {
        return this.#transferTax; 
    }

    set transferTax(amount) {
        this.#transferTax = amount;
    }

}


export const bank1 = new Bank(100, 'LuaBank', 0.01);
export const bank2 = new Bank(200, 'Banco X', 0.10);
//export const bank3 = new Bank(300, 'Banco Y', 0.05);