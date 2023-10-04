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
        console.log(`A quantidade de clientes é:${this.clients}`);
    }

    addBank(client) {
        if (client instanceof Client){
           if (client.banks.includes(this)) {
            console.log(`O cliente já possui conta a este banco`);
            console.log(client1);
           }
        } else {

        } client.banks.push(this);
            this.clients++;
            console.log(`Conta adcionada ao cliente ${client.name}`);
    }

    // removeBank(bank1) { //Não funcionou
    //     if(client1 === bank1){
    //         return 'Cliente removido da conta, já possui conta neste banco';
    //     }
    //     console.log(client1)
    // }
};

class Client {
    constructor(name, cpf, bankName) {
        this.name = name;
        this.cpf = cpf;
        this.banks = [];
    } 
}

class BankAccount {
       client;
       bank;
       accountNumber;
       agencyNumber;
       #balance = 0; 

       constructor( client, bank,accountNumber, agencyNumber, balance) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;  
    } 

    getCredit(amount) { //parâmetro privado do saldo
        this.#balance += amount;
        console.log(`o valor do crédito é ${this.#balance}`);
    }

    getDebit(amount) {
        this.#balance -= amount;
        console.log(`O novo saldo da conta é R$: ${this.#balance}`);
    }

    transferTo(anotherAccount, amount) {
        if(anotherAccount instanceof BankAccount) {
            if(this.#balance >= amount){
                const transferAmount = this.bank || amount + (amount * this.bank.transferTaxa);
                if (this.#balance >= transferAmount){
                    this.#balance -= transferAmount;
                    anotherAccount.#balance += amount;
                    console.log(`Transferência bem-sucedida. Novo saldo: ${this.#balance}`);

                } else {

                } console.log(`Saldo insuficiente para realizar a transferência.`);
            }
            
        }
    }

    closeAccount(){
        if (this.#balance === 0){
            console.log(`Conta encerrada com sucesso!`);
        } else {
            console.log(`Não é possível encerrar a conta com saldo.`);
        }
    }
}

// Adicionando um banco a um cliente
const bank1 = new Bank(100, 'ViviBank', 0.01);

const client1 = new Client('Luara', 2345678900, 'nuprograma'); // Instanciação de um objeto Client.
console.log(client1.cpf); //cpf: 2345678900
const client2 = new Client('Mari', 23428338233, 'nuprograma'); //nova cliente adcionada ao banco
const client3 = new Client('Pipoca', 23428338233, 'nu'); //nova cliente adcionada ao banco

const bank2 = new BankAccount('Carmina', 'Itaú', 223, 122, 3000);
console.log(bank2); //banco dois criado
console.log(bank2.balance); //parâmetro privado
bank2.getCredit(1000); //credit(amount)  valor do crédito é 1000
bank2.getDebit(500); //debit(amount) O novo saldo da conta é R$: 500
bank2.transferTo(bank1, 1500);

bank2.closeAccount(); //Não é possível encerrar a conta com saldo.

// bank2.getCredit(0); //credit(amount)  o valor do crédito é 0
// bank2.getDebit(500); //debit(amount)  novo saldo da conta é R$: -500
// bank2.closeAccount(); //conta encerrada com sucesso

bank2.transferTo(bank1, 1500);
// bank2.closeAccount(); //conta encerrada

const acountBank = new Bank(3546, 'nuprograma', 3);
const bank = new Bank(1000, 'nu', 0.01);

acountBank.addClient();
bank1.addClient();
acountBank.addClient();

acountBank.addBank(client1);
acountBank.addBank(client1);

console.log(acountBank instanceof Bank);
console.log(Bank.createdBanks);
console.log(client1.banks);

