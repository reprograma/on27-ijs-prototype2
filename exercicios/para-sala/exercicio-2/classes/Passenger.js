export class Passenger {
	name;
	age;
	password;
	amountSpent = 0;

	// static é uma palavra reservada para definir uma propriedade que só pode ser acessada dentro da classe ou atraves dela NomeDaClasse.NomeDoStatic

	static passengers = []
	
	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;
		Passenger.passengers.push( {name, age, password} )
	}

	requestDrive(driver, amount, password) {
		if (!(driver instanceof Driver)) {
			console.log('Motorista inválido!');
			return;
		}
		if (password !== this.password) {
			console.log(`${this.name}, sua senha está incorreta!`);
			return;
		}
		this.amountSpent -= amount;
		driver.runDrive(amount);
	}

	static numberOfPassengers(){
		console.log(`Existem ${this.passengers.length} passageiras cadastradas.`)
	}

	static ageAverage(){

		const totalOfPassengers = Passenger.passengers.length

		if (totalOfPassengers === 0) return; // caso seja vazio

		const sumOfAge = Passenger.passengers.reduce((total, passengers)=>{ 
			return total + passengers.age
		}, 0)

		console.log((sumOfAge / totalOfPassengers).toFixed(2))
	}
}
