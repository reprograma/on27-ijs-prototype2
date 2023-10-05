class Bank {
  static createdBanks = []

  constructor(...) {

    Bank.createdBanks.push({
      code: ...,
      numberOfClients: 0
    })
  }
}

// [{code: 1, number: 56}, {code: 2, number: 94}]

class Client {
  //...
  banks = [];

  addBank(bank) {
    this.banks.push(bank);

    Bank.createdBanks
  }
}
