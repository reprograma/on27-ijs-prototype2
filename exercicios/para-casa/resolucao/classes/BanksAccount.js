import { Client } from './Client.js';
import { Bank } from './Bank.js';

export class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    constructor(client, bank, accountNumber, agencyNumber) {
        if (!(client instanceof Client)) {
            console.log('Insira um cliente corretamente!');
            return;
        }

        if (!(bank instanceof Bank)) {
            console.log('Insira um banco corretamente!');
            return;
        }

        if (!client.banks.includes(bank)) {
            console.log(`CPF ${client.cpf} não localizado no banco ${bank.bankName}`);
            return;
        }

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    get balance() {
        return this.#balance;
    }

    creditAmount(amount) {
        this.#balance += amount;
        console.log(`Saldo atual R$ ${this.#balance}`);
    }

    debitAmount(amount) {
        if (amount > this.#balance) {
            console.log(`Saldo insuficiente`);
        }
        this.#balance -= amount;
        console.log(`Saldo atual R$ ${this.#balance}`);
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Não é uma conta bancária');
            return;
        }
        let tax = 0;
        if (this.bank != anotherAccount.bank) {
            tax = 0.01;
            const amountToDebit = amount + amount * tax;

            if (this.#balance >= amountToDebit) {
                this.#balance -= amountToDebit;
                anotherAccount.#balance += amount;
                console.log(`Tranferência realizada com sucesso`);
            } else {
                console.log(`Saldo insuficiente para realizar a transferência.`);
            }
        } else {
            if (this.#balance < amount) {
                console.log(`Saldo insuficiente`);
            } else {
                this.#balance -= amount;
                console.log(`O saldo atual da conta de origem é R$ ${this.#balance}`);
            }
        }
    }

    closeAccount() {
        if (this.#balance > 0 || this.#balance < 0) {
            console.log(`Não é possível encerrar a conta pois saldo é diferente de 0`);
            return;
        } else {
            this.client = undefined;
            this.bank = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            console.log(`Conta encerradacom sucesso!`);
        }
    }
}