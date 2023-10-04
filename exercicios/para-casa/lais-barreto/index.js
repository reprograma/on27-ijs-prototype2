//exercicios feitos pela profa aquiimport { Bank, bank1, bank2 } from "../lais-barreto/classes/Bank.js";
import { Client, client1, client2 } from "../lais-barreto/classes/Client.js";
import { BankAccount } from "../lais-barreto/classes/BankAccount.js";

client1.addBank(bank1);
console.log(bank1);
client2.addBank(bank2);
client1.removeBank(bank1);
console.log("createdBanks:", Bank.createdBanks);

console.log(client1.cpf);

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
console.log(bankAccount1);

const bankAccount2 = new BankAccount(client2, bank2, 3333, 4444);
console.log(bankAccount2);

const bank3 = new Bank(200, "NewBank", 0.01);
const client3 = new Client("Julia", 215);
const bankAccount3 = new BankAccount(client3, bank3, 2563, 1478);

bankAccount1.credit(1330);
bankAccount1.debit(300);

bankAccount3.transferTo(bankAccount1, 200);
bankAccount1.transferTo(bankAccount2, 300);

console.log(bankAccount3.balance);

bankAccount3.closeAccount();
