import { bank1, bank2} from "./Bank.js";
import { client1, client2 } from "./Client.js";

class BankAccount {

    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
  
    constructor(client, bank, accountNumber, agencyNumber) {
      this.client = client;
      this.bank = bank;
      this.accountNumber = accountNumber;
      this.agencyNumber = agencyNumber;
      this.#balance = 0;
    }
    
    get balance() {
        return this.#balance;
    }
  
    credit(amount) {
      this.#balance += amount;
      console.log(`A conta tem um saldo de: R$ ${this.#balance}`);
    }
  
    debit(amount) {
    if(this.#balance >= amount) {
        this.#balance -= amount;
        console.log(`O novo valor é de ${this.#balance}`);
      } else {
        console.log('Você não tem saldo suficiente para essa operação.')
      }
    }

    
    transferTo(anotherAccount, amount) {
        const transferMoney = this.bank === anotherAccount.bank ? 0 : this.bank.transferTax * amount;
      
        if (this.#balance >= amount + transferMoney) {
          this.#balance -= amount + transferMoney;
          anotherAccount.credit(amount);
          console.log(`Saldo atualizado: R$ ${this.#balance}`);
        } else {
          console.log('Saldo insuficiente');
        }
      }
      
  
    closeAccount() {
      if (this.#balance === 0) {
        console.log('Conta encerrada!');
        this.client.removeBank(this.bank);
        this.client = undefined;
        this.bank = undefined;
        this.accountNumber = undefined;
        this.agencyNumber = undefined;
      } else {
        console.log('Não será possível excluir o banco, pois você possui saldo na conta ');
      }
    }
  }

  const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
  const bankAccount2 = new BankAccount(client2, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
  const bankAccount3 = new BankAccount(client2, bank2, 1111, 2222); // Instanciação de um objeto BankAccount.
  console.log(bankAccount1);
  
  console.log(bankAccount1.balance); // 0

  // Creditando dinheiro na conta
bankAccount1.credit(1000); 

// Debitando dinheiro da conta
bankAccount1.debit(300);

// Transferindo de uma conta para outra sem taxa
// bankAccount1.transferTo(bankAccount2, 200);
// O saldo atual da conta de origem é de R$ 500

// Transferindo de uma conta para outra (com taxa)
bankAccount1.transferTo(bankAccount3, 200);
// O saldo atual da conta de origem é de R$ 496

// Fechando a conta
bankAccount1.closeAccount(); 

console.log(bankAccount1);