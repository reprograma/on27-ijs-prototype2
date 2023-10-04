// importações
import { Bank } from "./Bank.js";
import { Client } from "./Client.js";
import { BankAccount } from "./BanksAccount.js";

// bancos
console.log(Bank.createdBanks)

const bankGeice = new Bank(100, 'GeiceBank', 10); 
const bankLua = new Bank(200, 'LuaBank', 20); 
const bank1 = new Bank(800, 'BankBank', 5);

console.log(bankGeice)
console.log(bankLua)
console.log(Bank.createdBanks)
bankGeice.transferTax = 15
console.log(bankGeice.bankName)
console.log(bankGeice.bankCode)
console.log(bankGeice.transferTax)

// clients

const clientMaria = new Client('Maria das Dores', 123);
const clientGeice = new Client('Geice Conceição', 321);
const clientAparecida = new Client('Aparecida', 456);

clientGeice.addBank(bankGeice); 
clientGeice.addBank(bank1); 
clientMaria.addBank(bank1); 
clientMaria.addBank(bankLua);

console.log(clientMaria); 
console.log(`CPF: ${clientMaria.cpf}`);
console.log()
console.log(clientGeice); 
console.log(`CPF: ${clientGeice.cpf}`);

clientGeice.removeBank(bank1); 
clientMaria.removeBank(bank1); 

console.log(clientMaria); 
console.log(clientGeice); 

// conta bancária

const bankAccount1 = new BankAccount(clientGeice, bankGeice, 1111, 2222); 
const bankAccount2 = new BankAccount(clientMaria, bankLua, 2222, 3333); 
const bankAccount3 = new BankAccount(clientAparecida, bankLua, 2222, 3333); 
console.log(`Saldo atual: ${bankAccount1.balance}`); 
bankAccount1.credit(1000); 
console.log()
bankAccount1.debit(300);
console.log()
bankAccount1.transferTo(bankAccount2, 200);  // não consigo acessar a taxa de tranferencia e nem o saldo atual
console.log()
console.log(clientAparecida)
clientAparecida.addBank(bankGeice)
clientAparecida.addBank(bankLua)
console.log()
console.log(clientAparecida)
console.log(bankAccount3.closeAccount())
console.log()
console.log(bankAccount3)




