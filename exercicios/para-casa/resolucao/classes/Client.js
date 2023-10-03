import { Bank } from "./Bank.js"
export class Client{
    
        name
        #cpf
        banks
    
        constructor(name, cpf){
            this.name = name
            this.#cpf = cpf 
            this.banks = []
        }
    
        get cpf() {
            return this.#cpf//parametro privado do cpf
        }
    
        addBank(bank){
            if (!(bank instanceof Bank)) {
                console.log(`Banco inválido!`)
                return
            } 
    
            if (this.banks.includes(bank.bankName)) {
                console.log(`Erro: Banco ${bank.bankName} já associado!`)
                return
            }
            else {
                this.banks.push(bank.bankName)
                console.log(`Associação do banco ${bank.bankName} realizada com sucesso!`)
            }
            //AUMENTAR A QUANTIDADE DE CLIENTES
            const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
            Bank.createdBanks[bankIndex].qtdClients++
        }
        //EXEMPLO: createdBanks = [banco1, banco2, banco3...]
        // index = posição
    
        removeBank(bank) {
            if (!(bank instanceof Bank)) {
                console.log(`Banco inválido!`)
                return
            } 
    
            if (this.banks.includes(bank.bankName)) {
                this.banks.splice(bank.bankName)
                console.log(`Desassociação do banco ${bank.bankName} realizada com sucesso!`) 
            }
            else {
                console.log(`Erro: Este banco não é associado ao cliente!`)
            }
            // DIMINUIR A QUANTIDADE DE CLIENTES
            const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
            Bank.createdBanks[bankIndex].qtdClients--
        }          
    
    }

const client1 = new Client('Maria', 123); // Instanciação de um objeto Client.
console.log(client1); // { name: 'Maria', banks: [] }
console.log(client1.cpf); // 12345678900

// Adicionando um banco a um cliente
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria
console.log(client1);// { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }

// Removendo um banco de um cliente
client1.removeBank(bank1); // Banco 100 removido da cliente Maria
console.log(client1); // { name: 'Maria', banks: [] }