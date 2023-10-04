class Bank {
    bankCode;
    bankName;
    #transferTax;

    static createdBanks = [];

    constructor(bankCode,bankName, transferTax ){
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.clients = 0;
        Bank.createdBanks.push(this);
    }
    

    getBankCode() {
        console.log(`o código do banco é ${this.bankCode}`);
    }

    addClient() {
        this.clients++ ;
        console.log(`Clientes quantidade:${this.clients}`);
    }

    addBank(client) {
        if (client instanceof Client){
           if (client.banks.includes(this)) {
            console.log(`O cliente já possui conta a este banco`);
           }
        } else {

        } client.banks.push(this);
            this.clients++;
            console.log(`Conta adcionada ao cliente ${client.name}`);
    }
}

class Client {
    constructor(name, cpf, bankName) {
        this.name = name;
        this.cpf = cpf;
        this.banks = [];
    } 
    
}

const client1 = new Client('Luara', 2345678900, 'nuprograma');
const client2 = new Client('Mari', 23428338233, 'nuprograma');
const client3 = new Client('Pipoca', 23428338233, 'nu');

const acountBank = new Bank(3546, 'nuprograma', 3);
// const clientes1 = new Bank(123, 'nuprograma', 23);
const bank = new Bank(1000, 'nu', 0.01);

const bank1 = new Bank(100, 'ViviBank', 0.01);
const bank2 = new Bank(100, 'ViviBank', 0.01);

acountBank.addClient();
bank1.addClient();

acountBank.addBank(client1);
acountBank.addBank(client1);

console.log(acountBank instanceof Bank);
console.log(Bank.createdBanks);
console.log(client1.banks);



// por parâmetro durante a instanciação
/**createdBanks: Bancos criados

Propriedade estática, sendo ela uma array de objetos que é inicialmente vazia e é atualizada a cada vez que um novo banco é criado, contendo:
Código do banco criado
Quantidade de clientes que esse banco possui
Esse valor deve ser inicializado com 0 e aumentar a medida que um cliente é associado a esse banco.
 */