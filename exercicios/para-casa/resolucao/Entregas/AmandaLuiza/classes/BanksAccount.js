class BankAccount {
  constructor(client, bank, accountNumber, agencyNumber) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this._balance = 0;
    this.qtdWithdrawal = 0;
  }

  get balance() {
    return this._balance;
  }

  credit(amount) {
    this._balance += amount;
    console.log(`Crédito de R$ ${amount} realizado. O novo saldo da conta é: R$ ${this._balance}`);
  }

  debit(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(`Débito de R$ ${amount} realizado. O novo saldo da conta é: R$ ${this._balance}`);
    } else {
      console.log("Saldo insuficiente para realizar o débito.");
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this._balance) {
      if (this.client !== anotherAccount.client) {
        const tax = this.bank.transferTax * amount;
        this._balance -= amount + tax;
        console.log(`Transferência de R$ ${amount} realizada para outra conta do banco ${this.bank.bankName}. Taxa de transferência: R$ ${tax}. O novo saldo da conta é: R$ ${this._balance}`);
      } else {
        this._balance -= amount;
        console.log(`Transferência de R$ ${amount} realizada para outra conta do mesmo banco ${this.bank.bankName}. O novo saldo da conta é: R$ ${this._balance}`);
      }
    } else {
      console.log("Saldo insuficiente para realizar a transferência.");
    }
  }

  closeAccount() {
    if (this._balance === 0) {
      console.log("Conta encerrada!");
      this.client.banks = this.client.banks.filter((bank) => bank !== this.bank);
      // Remover o banco da lista de bancos associados ao cliente
    } else {
      console.log("Não é possível encerrar a conta com saldo não nulo.");
    }
  }

  cashWithdrawal(amount) {
    const withdrawalLimit = 2; // Limite de retiradas gratuitas
    if (this.qtdWithdrawal < withdrawalLimit) {
      this.qtdWithdrawal++;
      this.debit(amount);
      console.log(`Retirada realizada. O saldo atual da conta é de R$ ${this._balance}.`);
      console.log(`Total de retiradas realizadas: ${this.qtdWithdrawal}`);
      console.log(`Você ainda possui ${withdrawalLimit - this.qtdWithdrawal} retirada(s) gratuita(s).`);
    } else {
      const withdrawalFee = this.bank.transferTax * amount;
      this.debit(amount + withdrawalFee);
      console.log(`Retirada realizada. O saldo atual da conta é de R$ ${this._balance}.`);
      console.log(`Total de retiradas realizadas: ${this.qtdWithdrawal}`);
      console.log(`Você não possui mais nenhuma retirada gratuita.`);
      console.log(`Taxa de retirada: R$ ${withdrawalFee}`);
    }
  }
}
