import { Client } from './Client.js'
import { Bank } from './Bank.js'

export class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    constructor(client, bank, accountNumber, agencyNumber) {
        if (!(client instanceof Client)) {
            console.log('Cliente inválido!');
            return;
        }
        if (!(bank instanceof Bank)) {
            console.log('Banco inválido!');
            return;
        }
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    credit(amount) {
        if (amount <= 0) {
            throw (`O valor a ser creditado não pode ser zero.`)
        }
        this.#balance += amount
        console.log(`O novo saldo da conta é de: ${this.#balance} reais.`)
    }

    debit(amount) {
        if (amount <= 0) {
            throw (`O valor a ser debitado não pode ser zero.`)
        }
        if (this.#balance === 0) {
            throw (`Você não tem saldo suficiente para realizar essa transação.`)
        }
        this.#balance -= amount
        console.log(`O novo saldo da conta é de: ${this.#balance} reais.`)
    }

    transferTo(anotherAccount, amount) {
        if (!(bank instanceof BankAccount)) {
            console.log('Banco inválido!');
            return;
        }
        if (this.#balance >= amount) {
            this.#balance -= amount;
            anotherAccount.#balance += amount;
            console.log(`Transferência realizada com sucesso. Seu novo saldo é de ${this.#balance}`)
        } else {
            throw 'Você não tem saldo suficiente para essa operação.'
        }
    }
    closeAccount() {
        if (this.#balance === 0) {
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            this.bank.bankCode = undefined;
            this.bank.bankName = undefined
            this.#balance = undefined;
            console.log('Conta encerrada com sucesso!');
        } else {
            console.log(`Seu saldo é diferente de zero. Conta não encerrada. Saldo atual: ${this.#balance}`);
        }
    }

    get balance() {
        return this.#balance;
    }
}