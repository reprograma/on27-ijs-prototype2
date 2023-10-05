export class Bank {
    bankCode;
    bankName;
    #transferTax;

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(taxPaidToTransfer) {
        this.#transferTax = taxPaidToTransfer;
    }

    createdBanks(createdBankCode, qtdClients) {
        Bank.createdBanks.push({ bankCode: createdBankCode, qtdClients: 0 })
    }
}
