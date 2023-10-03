export class Bank{

    constructor(bankCode, bankName, transferTax){

        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.numberOfClients = 0;
        Bank.createdBanks.push({ bankCode: this.bankCode, numberOfClients: this.numberOfClients });

    }
  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(newTransferTax) {
    this.#transferTax = newTransferTax;
  }

  addClient() {
    this.numberOfClients++;
    // Atualiza a quantidade de clientes no banco correspondente
    const bankIndex = Bank.createdBanks.findIndex(bank => bank.bankCode === this.bankCode);

    if (bankIndex !== -1) {

      Bank.createdBanks[bankIndex].numberOfClients = this.numberOfClients;

    }
}
    #transferTax
    static createdBanks = [];
}
console.log(Bank.createdBanks);
const bank1 =  new Bank(200, 'ProgBank', 0.08);
console.log(bank1);
console.log(Bank.createdBanks);
console.log(bank1.transferTax);
bank1.tranferTax = 0.02;
console.log(bank1.transferTax);
bank1.addClient();
console.log(Bank.createdBanks);
//     static numberOfClients(){
//         const totalOfClients = this.createdBanks.length;
//         console.log(`O total de clientes é: ${this.createdBanks.length}`)

//         if(totalOfClients === 0) return;
//         }

// }

// export class Bank {
//     bankCode;
//     bankName;
//     #transferTax;
//     #numberOfClients;

// }