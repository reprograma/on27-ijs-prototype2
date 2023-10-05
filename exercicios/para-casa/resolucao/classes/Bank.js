export class Bank {
    bankCode;
    bankName;
    #transferTax;
    numbersClients;

    static createdBanks = []

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.numbersClients = 0;

        // salvar os objs dentro da array createdBanks. Ele entra no construtor, faz as associações e popula createdBanks
        this.constructor.createdBanks.push({ bankCode, numbersClients: this.numbersClients });
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax;
    }
}

// criando um novo banco
export const bank1 = new Bank(100, 'LuaBank', 0.01);
export const bank2 = new Bank(200, 'LuaBank', 0.03);

console.log(bank1);
console.log(Bank.createdBanks);
console.log(bank1.transferTax); 
bank1.transferTax = 0.02
console.log(bank1.transferTax);