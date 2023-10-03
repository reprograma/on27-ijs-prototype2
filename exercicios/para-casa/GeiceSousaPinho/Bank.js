export class Bank{
    bankCode;
    bankName;
    #transferTax;
    #clients;

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.#clients = 0;
        // this.newBank = createBank()
        Bank.createdBanks.push({ bankCode: this.bankCode, bankName: this.bankName, clients: this.#clients })
    }

    get transferTax(){
        return this.#transferTax;
    }

    set transferTax(tax){
        return this.#transferTax = tax;
    }

    static createdBanks = [];

    

    // createBank(nameNewBank){
    //     this.bankCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
    //     this.bankName = nameNewBank,
    //     this.#clients = 0
    //     // Bank.createdBanks.push({ bankCode: this.bankCode, bankName: this.bankName, #clients: this.#clients })
    //     this.constructor.createdBanks.push({ bankCode: this.bankCode, bankName: this.bankName, clients: this.#clients })
    // }


}


const bank1 = new Bank(100, 'LuaBank', 0.01); 
const bank2 = new Bank(200, 'GeiceBank', 0.02); 
console.log(Bank.createdBanks)
console.log(bank1)
console.log(bank2)


// export { bank1, bank2, Bank }