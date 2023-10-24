class BankAccount {
    #balance = 0
    
    constructor(client, bank, accountNumber, agencyNumber) {
      if (!client.banks.includes(bank)) {
        console.log(`A pessoa não é cliente do banco ${bank.bankName}.`);
        return;
      }
  
      this.client = client;
      this.Bank = bank;
      this.accountNumber = accountNumber;
      this.agencyNumber = agencyNumber;
    }
  
    get balance() {
      return this.#balance;
    }
  

    credit(amount) {
      this.#balance += amount;
      console.log(`Crédito de ${amount} realizado. Novo saldo: ${this.#balance}`);
    }
  
    debit(amount) {
      if (this.#balance < amount) {
        console.log("Saldo insuficiente para realizar a operação.");
      } else {
        this.#balance -= amount;
        console.log(`Débito de ${amount} realizado. Novo saldo: ${this.#balance}`);
      }
    }
  
    transferTo(anotherAccount, amount) {
      if (!(anotherAccount instanceof BankAccount)) {
        console.log("A conta destino deve ser do tipo BankAccount.");
        return;
      }
  
      if (this.#balance < amount) {
        console.log("Saldo insuficiente para realizar a transferência.");
        return;
      }
  
      const transferTax = (this.Bank === anotherAccount.Bank) ? 0 : this.Bank.transferTax;
      const totalAmount = amount + transferTax;
  
      this.debit(totalAmount);
      anotherAccount.credit(amount);
  
      console.log(`Transferência de ${amount} realizada para a conta ${anotherAccount.accountNumber}. Novo saldo: ${this.#balance}`);
    }
  
    closeAccount() {
      if (this._balance === 0) {
        console.log("Conta encerrada com sucesso.");
        const index = this.client.bankAccounts.indexOf(this);
        if (index !== -1) {
          this.client.bankAccounts.splice(index, 1);
        }
      } else {
        console.log("Não é possível encerrar a conta com saldo diferente de zero.");
      }
    }
  }
  