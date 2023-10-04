export class Bank{
    bankCode;
    bankName;
    #transferTax;
    #clients;

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.#clients = 0;
        Bank.createdBanks.push({ bankCode: this.bankCode, bankName: this.bankName, clients: this.#clients })
    }

    get transferTax(){
        return this.#transferTax;
    }

    set transferTax(tax){
        return this.#transferTax = tax;
    } 

    // createBank(nameNewBank){ this.bankCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000); this.bankName = nameNewBank; this.#clients = 0; this.constructor.createdBanks.push({ bankCode: this.bankCode, bankName: this.bankName, clients: this.#clients }) }
}


// console.log(Bank.createdBanks)
// const bankLua = new Bank(100, 'LuaBank', 0.01); 
// const bankGeice = new Bank(200, 'GeiceBank', 0.02); 
// console.log(bankGeice)
// console.log(bankLua)
// console.log(Bank.createdBanks)
// bankGeice.transferTax = 0.02
// console.log(bankGeice.bankName)
// console.log(bankGeice.bankCode)
// console.log(bankGeice.transferTax)

// export { bank1, bank2, Bank }