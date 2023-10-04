export class Client {
    name;
    _document;

    banks = [];

    constructor(name, document){
        this.name = name;
        this._document = document;
    }

    addBank(bank){
        if (this.banks.includes(bank)) {
            console.log(`O cliente já está associado ao banco ${bank.bankName}.`);
            return;
        }

        this.banks.push(bank);

        bank.numberOfClients++;
        console.log(`O cliente ${this.name} foi associado ao banco ${bank.bankName}.`);
    }

    removeBank(bank){
    const index = this.banks.indexOf(bank);
        if (index === -1) {
            console.log(`O cliente não está associado ao banco ${bank.bankName}.`);
            return;
        }

        this.banks.splice(index, 1);

        bank.numberOfClients--;
        console.log(`O cliente ${this.name} foi desassociado do banco ${bank.bankName}.`);
    }
}