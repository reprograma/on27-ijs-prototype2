export class Bank {
    code;
    name;
    #transferTax;
    static createdBanks = [];
    
    constructor(code, name, transferTax) {
        this.code = code;
        this.name = name;
        this.#transferTax = transferTax;
        Bank.createdBanks.push({code: this.code, clientsCount: 0});
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(value) {
        this.#transferTax = value;
    }

}