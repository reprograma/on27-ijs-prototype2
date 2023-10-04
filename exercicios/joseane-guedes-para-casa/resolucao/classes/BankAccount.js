import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber, agencyNumber) {
        if (client.banks.includes(bank)) {
            this.client = client;
            this.bank = bank;
            this.accountNumber = accountNumber;
            this.agencyNumber = agencyNumber;
            this.#balance = 0;
        } else {
            console.log("Cliente não associado a este banco. Infelizmente, a conta não pode ser criada!");
        }
    }

    getBalance() {
        return this.#balance;
    }

    credit(amount) {
        this.#balance += amount;
        console.log(`Novo saldo da conta é: R$ ${this.#balance}`);
    }

    debit(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Novo saldo da conta é: R$ ${this.#balance}`);
        } else {
            console.log("Saldo insuficiente para realizar a operação financeira.");
        }
    }

    transferTo(anotherAccount, amount) {
        if (this.#balance >= amount) {
            if (this.bank !== anotherAccount.bank) {
                const transferTax = this.bank.getTransferTax();
                amount += amount * transferTax;
            }
            this.debit(amount);
            anotherAccount.credit(amount);
            console.log(`A Transferência foi bem-sucedida! O saldo atual da conta de origem é de R$ ${this.#balance}`);
        } else {
            console.log("Saldo insuficiente para a transferência.");
        }
    }

    closeAccount() {
        if (this.#balance === 0) {
            this.client = undefined;
            this.bank = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            console.log("Conta encerrada!");
        } else {
            console.log("Não é possível encerrar a conta com saldo diferente de zero!");
        }
    }
}
