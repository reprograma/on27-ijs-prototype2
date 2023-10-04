class Bank {
    bankCode;
    bankName;
    transferTax;
    createdBanks = []

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.transferTax = transferTax;
    }
}