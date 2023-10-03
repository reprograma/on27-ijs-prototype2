//exercicios feitos pela profa aqui
import { Bank, bank1, bank2, bank3 } from './classes/Bank.js';
import { BankAccount } from './classes/BanksAccount.js';
import { client1, client2 } from './classes/Client.js';

client1.addBank(bank1);
client1.addBank(bank2);
console.log(client1);
console.log(client2);
client1.removeBank(bank2);
console.log(client1);

client2.addBank(bank2);
client2.addBank(bank3);
console.log(client2);
console.log(Bank.createdBanks);

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
console.log(bankAccount1);


const bankAccount2 = new BankAccount(client1, bank2, 3333, 4444);
console.log(bankAccount2);

const bankAccount3 = new BankAccount(client2, bank2, 5555, 6666);
console.log(bankAccount3);



bankAccount1.credit(1310);
bankAccount1.debit(3000);

bankAccount1.transferTo(bankAccount3, 1500);

bankAccount1.transferTo(bankAccount3, 1000);

bankAccount3.closeAccount();
console.log(bankAccount1);
