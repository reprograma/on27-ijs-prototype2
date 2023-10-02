class Client  {
  constructor(banks) {
    this.addBank(banks);
    this.banks = [];
  }

  addBank(bank) {
    // Verifica se o banco já está associado ao cliente
    if (this.banks.includes(bank)) {
      return;
    }
    // Adiciona o banco à lista de bancos do cliente
    this.banks.push(bank);
    // Aumenta a quantidade de clientes que o banco possui
    bank.addClient(this);
  }

  removeBank(bank) {
    // Verifica se o banco está associado ao cliente
    if (!this.banks.includes(bank)) {
      return;
    }

    // Remove o banco da lista de bancos do cliente
    const index = this.banks.indexOf(bank);
    this.banks.splice(index, 1);
    // Diminui a quantidade de clientes que o banco possui
    bank.removeClient(this);
  }
}