import { Bank } from "./Bank.js";

export class Client {
    name;
    cpf;
    banks;
    numberOfBanks = 0

    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
        this.banks = []
        console.log("Cliente criado!")
    }

    addBank(bank) {

        if (!(bank instanceof Bank)) {
            console.log('Insira o banco corretamente!');
            return;
        }

        this.banks.map((bank) => {
            console.log(`O banco ${bank} já está associado ao cliente!`)
            return
        })

        this.banks.push(bank)
        console.log(`Banco ${bank.bankName} adicionado à cliente ${this.name}`)
        this.numberOfBanks++
        console.log(`Number + ${this.numberOfBanks}`)
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('Insira o banco corretamente!');
            return;
        }

        this.banks.splice(this.banks.indexOf(bank, 1))
        this.numberOfBanks--
        console.log(`Number - ${this.numberOfBanks}`)
    }
}



/*Defina ainda uma classe `Client`.
A classe deve possuir as seguintes propriedades:

- [ ] `name`
  - Nome, recebido por parâmetro durante a instanciação.

- [ ] `CPF`
  - CPF, recebido por parâmetro durante a instanciação.
  - Deve ser um parâmetro privado.

- [ ] `banks`: Uma array de bancos ao qual é associada 
  - Deve ser inicializado vazio.

Como métodos da classe `Client`, temos:
- [ ] `addBank(bank)`: associa um banco a esse cliente.
  - O parâmetro `bank` deve obrigatoriamente ser do tipo `Bank`.
  - Verifique se o cliente já tem esse banco associado a ele. Se tiver, retorne uma mensagem e não adicione novamente.
  - Lembrar de aumentar a quantidade de clientes que esse banco possui. 

- [ ] `removeBank(bank)`: desassocia um banco a esse cliente.
  - O parâmetro `bank` deve obrigatoriamente ser do tipo `Bank`.
  - Verifique se o cliente tem esse banco associado a ele. Se não tiver, retorne uma mensagem e termine a execução da função.
  - Lembrar de diminuir a quantidade de clientes que esse banco possui.  */