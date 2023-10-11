//eu


// import { bank1, bank2} from "./Bank.js";
// import { client1, client2 } from "./Client.js";

// class BankAccount {

//     client;
//     bank;
//     accountNumber;
//     agencyNumber;
//     #balance;
  
//     constructor(client, bank, accountNumber, agencyNumber) {
//       this.client = client;
//       this.bank = bank;
//       this.accountNumber = accountNumber;
//       this.agencyNumber = agencyNumber;
//       this.#balance = 0;
//     }
    
//     get balance() {
//         return this.#balance;
//     }
  
//     credit(amount) {
//       this.#balance += amount;
//       console.log(`A conta tem um saldo de: R$ ${this.#balance}`);
//     }
  
//     debit(amount) {
//     if(this.#balance >= amount) {
//         this.#balance -= amount;
//         console.log(`O novo valor é de ${this.#balance}`);
//       } else {
//         console.log('Você não tem saldo suficiente para essa operação.')
//       }
//     }

    
//     transferTo(anotherAccount, amount) {
//         const transferMoney = this.bank === anotherAccount.bank ? 0 : this.bank.transferTax * amount;
      
//         if (this.#balance >= amount + transferMoney) {
//           this.#balance -= amount + transferMoney;
//           anotherAccount.credit(amount);
//           console.log(`Saldo atualizado: R$ ${this.#balance}`);
//         } else {
//           console.log('Saldo insuficiente');
//         }
//       }
      
  
//     closeAccount() {
//       if (this.#balance === 0) {
//         console.log('Conta encerrada!');
//         this.client.removeBank(this.bank);
//         this.client = undefined;
//         this.bank = undefined;
//         this.accountNumber = undefined;
//         this.agencyNumber = undefined;
//       } else {
//         console.log('Não será possível excluir o banco, pois você possui saldo na conta ');
//       }
//     }
//   }

//   const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
//   const bankAccount2 = new BankAccount(client2, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
//   const bankAccount3 = new BankAccount(client2, bank2, 1111, 2222); // Instanciação de um objeto BankAccount.
//   console.log(bankAccount1);
  
//   console.log(bankAccount1.balance); // 0

//   // Creditando dinheiro na conta
// bankAccount1.credit(1000); 

// // Debitando dinheiro da conta
// bankAccount1.debit(300);

// // Transferindo de uma conta para outra sem taxa
// // bankAccount1.transferTo(bankAccount2, 200);
// // O saldo atual da conta de origem é de R$ 500

// // Transferindo de uma conta para outra (com taxa)
// bankAccount1.transferTo(bankAccount3, 200);
// // O saldo atual da conta de origem é de R$ 496

// // Fechando a conta
// bankAccount1.closeAccount(); 

// console.log(bankAccount1);


//professora


import { Bank } from "./Bank.js";
import { Client } from "./Client.js";

export class BankAccount {
	client;
	bank;
	accountNumber;
	agencyNumber;
	#balance = 0;
	#qtdWithdrawal = 0;
  #withdrawalTax = 0.03;

	constructor(client, bank, accountNumber, agencyNumber) {
		if (!(client instanceof Client)) {
			return new Error('Informe um cliente válido');
		}
		if (!(bank instanceof Bank)) {
			return new Error('Informe um banco válido');
		}
		if (
			client.banks.find((element) => element.bankCode === bank.bankCode) ===
			undefined
		) {
			return new Error(
				`Cliente do CPF ${client.cpf} não possui conta no banco ${bank.bankName}`
			);
		}
		this.client = client;
		this.bank = bank;
		this.accountNumber = accountNumber;
		this.agencyNumber = agencyNumber;
	}

	get balance() {
		return this.#balance;
	}

  get qtdWithdrawal() {
		return this.#qtdWithdrawal;
	}

  get withdrawalTax() {
		return this.#withdrawalTax;
	}

  set withdrawalTax(newWithdrawalTax) {
		this.#withdrawalTax = newWithdrawalTax;
	}

	creditAmount(amount) {
		this.#balance += amount;
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
	}

	debitAmount(amount) {
		this.#balance -= amount;
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
	}

	transferTo(anotherAccount, amount) {
		// Verifica se é instância de BankAccount
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		let amountToBeDebited = amount;
		if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
			amountToBeDebited = amount + amount * this.bank.transferTax;
			console.log(
				`Essa transferência terá uma taxa de ${
					this.bank.transferTax * 100
				}%, pois se trata de uma transferência entre bancos diferentes.`
			);
		}

		if (this.#balance >= amountToBeDebited) {
			this.debitAmount(amountToBeDebited);
			anotherAccount.creditAmount(amount);

			console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
	}

	closeAccount() {
		if (this.#balance === 0) {
			console.log(`CoEncerrando conta de ${this.client.name} no banco ${this.bank.bankName}.`);
			this.client = undefined;
			this.accountNumber = undefined;
			this.agencyNumber = undefined;
			this.bank = undefined;
			console.log(`Conta encerrada!`);

		} else {
			console.log(
				`Você possui um saldo de R$ ${
					this.#balance
				}. Para encerrar a conta é necessário que o saldo seja igual a zero.`
			);
		}
	}

  cashWithdrawal(amount) {
		let amountToBeDebited = amount;

		console.log(
			`Você já realizou ${this.#qtdWithdrawal} retiradas. As primeiras 2 retiradas são gratuitas.`
		);
		if (this.#qtdWithdrawal >= 2) {
			amountToBeDebited = amount + amount * this.#withdrawalTax;
			console.log(
				`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de ${
					this.#withdrawalTax
				}`
			);
		} else {
			console.log(
				`Você ainda possui ${2 - this.#qtdWithdrawal} retiradas gratuitas.`
			);
		}

		if (this.#balance >= amountToBeDebited) {
			this.debitAmount(amountToBeDebited);

			console.log(
				`Retirada realizada. O saldo atual da conta é de R$ ${this.#balance}.`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#balance
				}`
			);
		}
		this.#qtdWithdrawal++;
		console.log(`Total de retiradas: ${this.#qtdWithdrawal}`);
	}
}