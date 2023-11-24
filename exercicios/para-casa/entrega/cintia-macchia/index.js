import { Bank } from "./classes/Bank.js";
import { Client } from "./classes/Client.js";
import { BankAccount } from "./classes/BankAccount.js"


const bank1 = new Bank(100, 'LuaBank', 0.01);
console.log(Bank.createdBanks);

const client1 = new Client('Maria', 123);
console.log(client1);
const client2 = new Client("Cintia", 12646146)
console.log(client2)

client1.addBank(bank1);
console.log(client1);

const account1 = new BankAccount(client1, bank1, '12345', '6789');
console.log(account1);

account1.credit(1000);
account1.debit(500);

const bank2 = new Bank(200, 'SolBank', 0.02);
client1.addBank(bank2);

const account2 = new BankAccount(client1, bank2, '54321', '9876');
account1.transferTo(account2, 200);
account1.closeAccount();