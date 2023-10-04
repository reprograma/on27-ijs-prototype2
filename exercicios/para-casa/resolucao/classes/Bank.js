export class Bank {
    bankCode;
    bankName;
    #transferTax = 0;

    static createdBanks = [];

    constructor(bankCode, bankName) {
        this.bankCode = bankCode;
        this.bankName = bankName;

        this.constructor.createdBanks.push({ bankCode: bankCode, bankName: bankName, })
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(newTax) {
        this.#transferTax = newTax;
    }

}


// - []`createdBanks`: Bancos criados
//     - Propriedade ** estática **, sendo ela uma array de objetos que é inicialmente vazia e é atualizada a cada vez que um novo banco é criado, contendo:
// - `Código do banco criado`
//     - `Quantidade de clientes que esse banco possui`
//     - Esse valor deve ser inicializado com 0 e aumentar a medida que um cliente é associado a esse banco.


// Defina uma classe para um objeto`Bank`.
// O banco deve possuir as seguintes propriedades:
// -[]`bankCode`: Código do banco
//     - Número do banco, recebido por parâmetro durante a instanciação.

// - []`bankName`: Nome do banco
//     - Recebido por parâmetro durante a instanciação.

// - []`transferTax`: Taxa de transferência para outros bancos
//     - Recebido por parâmetro durante a instanciação.
//   - Deve ser um parâmetro privado.
//   - Deve ter um método get e um método set.