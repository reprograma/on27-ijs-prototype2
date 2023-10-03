import { Bank } from './classes/Bank.js'
import { Client } from './classes/Client.js'
import { BankAccount } from './classes/BanksAccount.js'


console.log(Bank.createdBanks);

const bank1 = new Bank(100, 'LuaBank', 0.01);
const bank2 = new Bank(152, 'Nubank', 0.05)
const bank3 = new Bank(164, 'Bradesco', 0.1)
console.log(bank1);
console.log(bank2);
console.log(bank3);

// Agora a propriedade estática createdBanks é uma
// array que contém 1 objeto, que corresponde ao banco criado.
// O objeto possui o código do banco e a quantidade de clientes (que inicialmente é 0):
console.log(Bank.createdBanks);

console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02
console.log(bank1.transferTax); // 0.02

const client1 = new Client('Maria', 123);
const client2 = new Client('Paulo', 566);
const client3 = new Client('Vinicius', 6887);
console.log(client1);
console.log(client1.cpf);
// console.log(client2);
// console.log(client2.cpf);
// console.log(client3);
// console.log(client3.cpf);

// Adicionando um banco a um cliente
client1.addBank(bank1);
console.log(client1);

client2.addBank(bank2)
client3.addBank(bank2)
// console.log(client2);
// console.log(client3);

// // Removendo um banco de um cliente
// client1.removeBank(bank1); // Banco 100 removido da cliente Maria
// console.log(client1); // { name: 'Maria', banks: [] }

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
console.log(bankAccount1);
const bankAccount2 = new BankAccount(client2, bank2, 2222, 3333);
console.log(bankAccount2);

console.log(Bank.createdBanks);

// console.log(bankAccount1.balance); // 0

// // Creditando dinheiro na conta
bankAccount1.credit(1000); // O novo saldo da conta é: R$ 1000

// // Debitando dinheiro da conta
bankAccount1.debit(300); // O novo saldo da conta é: R$ 700

// // // Transferindo de uma conta para outra
bankAccount1.transferTo(bankAccount2, 200);
// // // O saldo atual da conta de origem é de R$ 500

// // // Fechando a conta
// bankAccount1.closeAccount(); // Conta encerrada!

// // console.log(bankAccount1);
// // // BankAccount {
// // //   client: undefined,
// // //   bank: undefined,
// // //   accountNumber: undefined,
// // //   agencyNumber: undefined,
// // // }