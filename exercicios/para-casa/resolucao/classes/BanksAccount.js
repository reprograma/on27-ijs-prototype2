import { Bank }  from "./Bank.js"
import { Client } from "./Client.js"

// FALTA ATUALIZAR OS CLIENTES NOS BANCOS - VER EXEMPLO DO EXERCÍCIO 8 Q A PROF FEZ E FAZER OS TESTES

class BankAccount {
    client
    bank
    accountNumber
    agencyNumber
    #balance
    #qtdWhithdrawal
    #withdrawalTax

    constructor(client, bank, accountNumber, agencyNumber) {
        if (!(client instanceof Client)) {
            throw new Error("Cliente inválido!")
        } else {
            this.client = client
        }

        if (!(bank instanceof Bank)) {
            throw new Error(`Banco inválido!`)
        } else if (!(client.banks.includes(bank.bankName))){
            throw new Error(`Conta não pode ser criada, pois o ${Client.name} não é cliente deste Banco!`)
        } else {
            this.bank = bank
        }
        this.accountNumber = accountNumber
        this.agencyNumber = agencyNumber
        this.#balance = 0
        this.#qtdWhithdrawal = 0
        this.#withdrawalTax = 0.03
    }

    get balance() {
        return this.#balance
    } 

    get qtdWhithdrawal() {
        return this.#qtdWhithdrawal
    }

    get withdrawalTax() {
        return this.#withdrawalTax
    }

    set withdrawalTax(tax) {
        this.#withdrawalTax = tax
    }

    credit(amount) {
        this.#balance = this.#balance + amount
        console.log(`Quantia de ${this.credit} creditada com sucesso!`)
    }

    debit(amount) {
        this.#balance = this.#balance - amount
        console.log(`Quantia ${this.debit} debitada com sucesso!`)
    }

    transferTo(anotherAccount, amount) {
        if(!(anotherAccount instanceof BankAccount)) {
            console.log("Conta inválida!")
        }

        if (this.#balance < amount) {
            console.log("Não foi possível realizar esta operação! Saldo insuficiente!")
            return
        }

        if (!(anotherAccount.bank.bankName == this.bank.bankName)) {
            this.debit(amount * (1 + this.#withdrawalTax)) 
        } else {
            this.debit(amount)
        }
        anotherAccount.credit(amount)
        console.log(`Transferência realizada com sucesso. O seu saldo atual é de R$ ${this.balance} e o saldo da consta destino é de R$ ${anotherAccount.balance}`)
    }

    //cashwithdrawal(amount) {

    //}

    closeAccount(){
        if(!(this.#balance == 0)) {
            console.log("Não é possível encerrar a conta, pois você ainda tem saldo!")
        } else {
            console.log("Conta encerrada com sucesso!")
        }
    }
}