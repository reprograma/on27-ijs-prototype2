import { Client } from './Client.js'
import { Bank } from './Bank.js'

export class BankAccount {
  client = Client;
  bank = Bank;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber){
    this.bank = bank;
    this.client = client;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
  }

  get balance(){
    return this.#balance;
  }

  credit(amount){
    this.#balance += amount;
    console.log(`Crédito de ${this.#balance} realizado. O novo saldo é de ${this.#balance}`);
  }

  debit(amount){
    if(this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`Débito de ${amount} realizado. O novo saldo é de ${this.#balance}.`);
    } else {
      console.log('Você não possue saldo para realizar essa operação.')
    }
  }

  transferTo(anotherAccount, amount){
    let tax = 0;

    if(this.bankNumber !== anotherAccount.bankNumber) {
      this.bank.newTransferTax
    }

    const amountToDebit = amount + (amount * tax);

    if(this.#balance >= amountToDebit) {
      this.#balance -= amountToDebit;
      anotherAccount.#balance += amount;
      console.log(`Transferência realizada com sucesso. Seu novo saldo é de ${this.#balance}`)
    } else {
      throw 'Você não possue saldo suficiente para essa operação.'
    }
  }

  closeAccount(){
    if(this.#balance === 0) {
      this.agencyNumber = undefined;
      this.numberAccount = undefined;
      this.bankNumber = undefined;
      this.#balance = undefined;

      console.log('Conta encerrada com sucesso!');
    } else {
      console.log(`Seu saldo é diferente de zero. Conta não encerrada. Saldo atual: ${this.#balance}`);
    }
  }
}