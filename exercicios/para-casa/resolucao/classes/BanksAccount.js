import { Bank } from './Bank';
import { Client } from './Client';

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    constructor(client, bank, accountNumber, agencyNumber) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    get balance() {
        return this.#balance;
    }

    credit(amount) {
        let newBalance = this.#balance += amount;
        console.log(`Saldo disponível de débito e crédito: R$${newBalance}`);
    }
    debit(amount) {
        let newBalance = this.#balance -= amount;
        console.log(`Você gastou ${amount} no débito. Saldo disponível: R$${newBalance}`);
    }
    transferTo(anotherAccount, amount) {
        //TODO: implementar

    }
    closeAccount() {
        if (this.#balance > 0) {
            console.log(`Não é possível encerrar a conta. Saldo disponível: R$${this.#balance}.`)
        }
        if (this.#balance == undefined) {
            console.log(`Conta encerrada.`)
        }

    }

}