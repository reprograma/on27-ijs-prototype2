export class Driver{
    name;
    age;
    numberOfRides = 0; // inicialização fora do construtor
    amountEarned;

    constructor(name, age){
        if(age >= 18){   
            this.name = name;
            this.age = age;
            this.amountEarned = 0; // nem todas as propriedade precisam sem passadas por paramentro, os valores podem ser atribuidos nos metodos
        } else {
            return 'Você precisa ser maior de 18 anos para poder se cadastrar!'
        }
    }

    runDrive(amout){
        this.numberOfRides += 1; // this.numberOfRides++
        this.amountEarned += amout;
    }
}