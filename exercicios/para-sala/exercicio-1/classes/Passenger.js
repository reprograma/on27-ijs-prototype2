import { Driver } from "./Driver.js";
export class Passenger{
    name;
    age;
    password;
    amountSpent = 0;

    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    requestDrive(driver, amount, password){
        if (password === this.password && driver instanceof Driver){ // instancef diz que tem que ser obrigatoriamente daquela instancia
            this.amountSpent -= amount;
            driver.runDrive(amount); // aqui driver esta com letra miniscula pq é o paramentro
        } else{
            console.log('Houve um erro! Verifique novamente os dados passados')
        }
    }  
}