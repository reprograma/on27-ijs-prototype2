import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;
    #withdrawalCount = 0;
    #withdrawalTax = 0.01;

    constructor(client, bank, accountNumber, agencyNumber) {
        if (!(client instanceof Client)) {
            console.error("O cliente deve ser uma instância da classe Client");
            return;
        }
        if (!(bank instanceof Bank)) {
            console.error("O banco deve ser uma instância da classe Bank");
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

    get withdrawalCount() {
        return this.#withdrawalCount;
    }

    get withdrawalTax() {
        return this.#withdrawalTax;
    }

    set withdrawalTax(value) {
        this.#withdrawalTax = value;
    }

    credit(amount) {
        if (amount <= 0) {
            console.error("O valor a ser creditado deve ser maior que zero");
            return;
        }

        this.#balance += amount;
        console.log(`O valor de R$${amount} foi creditado na conta de ${this.client.name}`);
    }

    debit(amount) {
        if (amount <= 0) {
            console.error("O valor a ser debitado deve ser maior que zero");
            return;
        }
        if (amount > this.#balance) {
            console.error("Saldo insuficiente");
            return;
        }

        this.#balance -= amount;
        console.log(`O valor de R$${amount} foi debitado na conta de ${this.client.name}`);
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.error("A conta deve ser uma instância da classe BankAccount");
            return;
        }
        if (amount <= 0) {
            console.error("O valor a ser transferido deve ser maior que zero");
            return;
        }
        if (amount > this.#balance) {
            console.error("Saldo insuficiente");
            return;
        }

        const transferAmount = this.bank.code !== anotherAccount.bank.code ? amount * (1 + this.bank.transferTax) : amount;
        this.#balance -= transferAmount;

        anotherAccount.credit(amount);
        console.log(`O valor de R$${amount} foi transferido da conta de ${this.client.name} para a conta de ${anotherAccount.client.name}`);
        if (this.bank.code !== anotherAccount.bank.code) {
            console.log(`Foi cobrada uma taxa de transferência de R$${amount * this.bank.transferTax} para transferência entre bancos diferentes`);
        }
    }

    cashWithdrawal(amount) {
        if (amount <= 0) {
            console.error("O valor a ser sacado deve ser maior que zero");
            return;
        }
        if (amount > this.#balance) {
            console.error("Saldo insuficiente");
            return;
        }

        this.#withdrawalCount++;
        const withdrawalAmount = this.#withdrawalCount <= 3 ? amount : amount * (1 + this.#withdrawalTax);
        this.#balance -= withdrawalAmount;
        console.log(`O valor de R$${amount} foi sacado da conta de ${this.client.name}`);

        if (this.#withdrawalCount < 3) {
            console.log(`Você ainda possui ${3 - this.#withdrawalCount} saques gratuitos`);
        } else if (this.#withdrawalCount === 3) {
            console.log(`Sem saques gratuitos restantes. A partir do próximo saque será cobrada uma taxa de saque de ${this.#withdrawalTax * 100}%`);
        } else {
            console.log(`Sem saques gratuitos restantes. Foi cobrada uma taxa de saque de R$${amount * this.#withdrawalTax}`);
        }
    }

    closeAccount() {
        if (this.#balance > 0) {
            console.error("Não é possível fechar a conta com saldo positivo");
            return;
        }
        if (this.#balance < 0) {
            console.error("Não é possível fechar a conta com saldo negativo");
            return;
        }

        this.client.removeBank(this.bank);
        console.log(`A conta de ${this.client.name} no banco ${this.bank.name} foi encerrada com sucesso`);
    }
}
