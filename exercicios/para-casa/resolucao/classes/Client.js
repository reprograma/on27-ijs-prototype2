
//hloiza

// import { Bank } from "./Bank.js";
// import { bank1, bank2} from "./Bank.js"; 

// export class Client {
//     name;
//     #cpf;

//     banks = [];

//     constructor(name, cpf) {
//         this.name = name;
//         this.#cpf = cpf;
//     }

//     get cpf() {
//         return this.#cpf;
//     }
//     addBank(bank) {
//         if (!bank instanceof Bank) {
//             return console.log("O parâmetro bank deve obrigatoriamente ser do tipo Bank.")
//         }

//         if (this.banks.includes(bank)) {
//             return console.log("Cliente já tem esse banco associado a ele.");
//         }else {
//             this.banks.push(bank);
//             bank.amountClients++;
//         }

       
//     }

//     removeBank(bank) {
//         const index = this.banks.findIndex(currentBank => currentBank.bankCode === bank.bankCode);

//         if (index === -1) {
//             console.log('Banco inválido');
//         } else {
//             this.banks.splice(index, 1);
//             console.log(`O banco foi removido`);
//         }
       
//     }

// }

// const client1 = new Client('Maria', 123); 
// console.log(client1); // { name: 'Maria', banks: [] }
// console.log(client1.cpf); // 123

// // Adicionando um banco a um cliente
// client1.addBank(bank1); 
// console.log(client1);


// // Removendo um banco de um cliente
// client1.removeBank(bank1); // Banco 100 removido da cliente Maria
// console.log(client1); // { name: 'Maria', banks: [] }

// const client2 = new Client('Maria', 1234); 
// client2.addBank(bank2); 

// export  {client1, client2}


import { Bank } from "./Bank.js";

export class Client {
	name;
	#cpf;
	banks = [];

	constructor(name, cpf) {
		this.name = name;
		this.#cpf = cpf;
	}

	get cpf() {
		return this.#cpf;
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bankCode === bank.bankCode) !==
			undefined
		);
	}

	addBank(bank) {
		// Verifica se é instância de Bank
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		// Verifica se já possui conta no banco
		if (this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
			);
			return;
		}

		// Adiciona o banco e aumenta o número de clientes
		this.banks.push(bank);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients++;

		console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
	}

	removeBank(bank) {
		// Verifica se é instância de Bank
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		// Verifica se possui conta no banco
		if (!this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`
			);
			return;
		}

		// Remove o banco e diminui o número de clientes
		this.banks = this.banks.filter(
			(element) => element.bankCode !== bank.bankCode
		);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}
}

export const client1 = new Client('Maria', 123456789);
export const client2 = new Client('Sandra', 987654321);