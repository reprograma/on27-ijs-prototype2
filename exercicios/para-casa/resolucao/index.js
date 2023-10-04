import { Bank } from './classes/Bank.js';
import { Client } from './classes/Client.js';
import { BankAccount } from './classes/BanksAccount.js';

const bank1 = new Bank(100, 'LuaBank', 0.01);
const bank2 = new Bank(200, 'AnotherBank', 0.01);
console.log(Bank.createdBanks); // [ { bankCode: 100, customerCount: 0 }, { bankCode: 200, customerCount: 0 } ]

const client1 = new Client('Maria', 123456789);
const client2 = new Client('Sandra', 12345678911);
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria
client2.addBank(bank2); // Banco 200 adicionado à cliente Sandra
console.log(Bank.createdBanks); // [ { bankCode: 100, customerCount: 1 }, { bankCode: 200, customerCount: 1 } ]
console.log(client1); // { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }
client1.removeBank(bank1); // Banco 100 removido da cliente Maria
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccount(client2, bank2, 1000, 2000);
bankAccount1.creditAmount(1000); // O novo saldo da conta é: R$ 1000
bankAccount1.debitAmount(300); // O novo saldo da conta é: R$ 700
bankAccount1.transferTo(bankAccount2, 200); // Essa transferência terá uma taxa de 1%, pois se trata de uma transferência entre bancos diferentes. O saldo atual da conta de origem é de R$ 498, foi debitado o valor de R$ 202
bankAccount1.closeAccount(); // Não é possível encerrar a conta pois há R$  498 de saldo. Para encerrar a conta é necessário que o saldo seja igual a zero
bankAccount1.debitAmount(498); // O novo saldo da conta é R$ 0
bankAccount1.closeAccount(); // Conta encerrada!
console.log(bankAccount1);