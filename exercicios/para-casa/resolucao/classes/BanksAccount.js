import { Client } from "./Client.js";
import { Bank } from "./Bank.js";

export class BankAccount {
	client = Client;
	bank = Bank;
	accountNumber;
    agencyNumber;
	#balance = 0;
}