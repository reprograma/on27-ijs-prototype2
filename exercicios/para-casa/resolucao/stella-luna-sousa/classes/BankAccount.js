import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;
    #withdrawalCount = 0;
    #withDrawalTax = 0.01;

    constructor(client, bank, accountNumber, agencyNumber) {
        if(!(client instanceof Client)) return console.error("O cliente deve ser uma instância da classe Client");
        if(!(bank instanceof Bank)) return console.error("O banco deve ser uma instância da classe Bank");

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    get balance() { return this.#balance; }
    get withdrawalAmount() { return this.#withdrawalCount; }
    get withDrawalTax() { return this.#withDrawalTax; }
    
    set withDrawalTax(value) { this.#withDrawalTax = value; }

    credit(amount) {
        if(amount <= 0) return console.error("O valor a ser creditado deve ser maior que zero");

        this.#balance += amount;
        console.log(`O valor de R$${amount} foi creditado na conta de ${this.client.name}`);
    }

    debit(amount) {
        if(amount <= 0) return console.error("O valor a ser debitado deve ser maior que zero");
        if(amount > this.#balance) return console.error("Saldo insuficiente");

        this.#balance -= amount;
        console.log(`O valor de R$${amount} foi debitado na conta de ${this.client.name}`);
    }

    transferTo(anotherAccount, amount) {
        if(!(anotherAccount instanceof BankAccount)) return console.error("A conta deve ser uma instância da classe BankAccount");
        if(amount <= 0) return console.error("O valor a ser transferido deve ser maior que zero");
        if(amount > this.#balance) return console.error("Saldo insuficiente");

        this.#balance -= this.bank.code !== anotherAccount.bank.code ? amount * (1 + this.bank.transferTax) : amount;

        anotherAccount.credit(amount);
        console.log(`O valor de R$${amount} foi transferido da conta de ${this.client.name} para a conta de ${anotherAccount.client.name}`);
        if(this.bank.code !== anotherAccount.bank.code) console.log(`Foi cobrado uma taxa de transferência de R$${amount * this.bank.transferTax} para transferência entre bancos diferentes`);
    }

    cashWidthdrawal(amount) {
        if(amount <= 0) return console.error("O valor a ser sacado deve ser maior que zero");
        if(amount > this.#balance) return console.error("Saldo insuficiente");

        this.#withdrawalCount++;
        this.#balance -= this.#withdrawalCount <= 3 ? amount : amount * (1 + this.#withDrawalTax);
        console.log(`O valor de R$${amount} foi sacado da conta de ${this.client.name}`);

        if(this.#withdrawalCount < 3) console.log(`Você ainda possui ${3 - this.#withdrawalCount} saques gratuitos`);
        else if(this.#withdrawalCount === 3) console.log(`Sem saques gratuitos restantes. A partir do próximo saque será cobrado uma taxa de saque de ${this.#withDrawalTax * 100}%`);
        else console.log(`Sem saques gratuitos restantes. Foi cobrado uma taxa de saque de R$${amount * this.#withDrawalTax}`);

        
    }

    closeAccount() {
        if(this.#balance > 0) return console.error("Não é possível fechar a conta com saldo positivo");
        if(this.#balance < 0) return console.error("Não é possível fechar a conta com saldo negativo");

        this.client.removeBank(this.bank);
        console.log(`A conta de ${this.client.name} no banco ${this.bank.name} foi encerrada com sucesso`);
    } 
}