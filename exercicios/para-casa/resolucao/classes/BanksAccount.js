import { Bank, bank1, bank2 } from "./Bank.js";
import { Client, client1, client2 } from "./Client.js";

export class BankAccount {
    client;
    bank; // A conta só pode ser criada caso a pessoa seja cliente desse banco.
    accountNumber;
    agencyNumber;
    #balance = 0

    constructor(client, bank, accountNumber, agencyNumber) {
        if (!(client instanceof Client)) {
            throw new Error('O parâmetro client precisa ser instância da classe Client ')
        }
        if (!(bank instanceof Bank)) {
            throw new Error('O parâmetro bank precisa ser instância da classe Bank');
        }

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        this.#balance = amount;
    }

    credit(amount) {
        this.#balance += amount
        console.log(`Novo crédito recebido. O novo saldo é: R$ ${this.#balance.toFixed(2)}`);
    }

    debit(amount) {
        if (amount <= this.balance) {
            this.#balance -= amount
            console.log(`Saque de R$ ${amount.toFixed(2)} realizado com sucesso. O novo saldo é: R$ ${this.#balance.toFixed(2)}`);
        } else {
            console.log(`O cliente ${this.client.name} não possui saldo suficiente para essa transação`);
        }
    }

    transferTo(anotherAccount, amount) {

        if (this.bank !== anotherAccount.bank) {
            const transferTax = this.bank.transferTax;
            console.log(`Transação entre bancos diferentes. Taxa de transferência aplicada: R$ ${(transferTax * amount).toFixed(2)}`)

            if (amount + transferTax * amount <= this.balance) {
                this.balance -= amount + (transferTax * amount)
                anotherAccount.balance += amount;

                console.log(`Transação realizada com sucesso. O valor de R$ ${amount.toFixed(2)} foi tranferido, seu novo saldo é de R$ ${this.#balance.toFixed(2)}`);
            }
            else {
                console.log('Saldo insuficiente para essa transação');
            }
        } else if (amount <= this.balance) {
            this.balance -= amount;
            anotherAccount.balance += amount;
            console.log(`Transação realizada com sucesso. O valor de R$ ${amount.toFixed(2)} foi tranferido, seu novo saldo é de R$ ${this.#balance.toFixed(2)}`);

        } else {
            console.log('Saldo insuficiente para essa transação');
        }
    }

    closeAccount() {
        if (this.balance === 0) {
            console.log('Conta encerrada com sucesso!');
            this.client.removeBank(this.bank);
        } else {
            console.log(`Não foi possível encerrar a conta! Realize o saque total de R$ ${this.balance.toFixed(2)} e tente novamente.`);
        }
    }
}

export const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
export const bankAccount2 = new BankAccount(client2, bank2, 3333, 4444);

// console.log(bankAccount1);
// console.log(bankAccount1.balance);
// bankAccount1.credit(1000);

// bankAccount1.debit(300); 

// bankAccount1.transferTo(bankAccount2, 200);

// bankAccount1.closeAccount(); 

// bankAccount1.debit(498); 
// bankAccount1.closeAccount(); 

// console.log(client1);
