export class Driver {
	name;
	age;
	numberOfRides = 0;
	amountEarned = 0;
	
	static drivers = []

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		this.name = name;
		this.age = age;
		Driver.drivers.push({name, age}); // this.constructor.drivers.push({name, age})
	}

	runDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}

	static numberOfDrivers(){
		console.log( `Existem ${Driver.drivers.length} motoristas cadastradas.`) // fora do construtort tambem pode ser this.drivers
	}

	static ageAverage(){
		const totalOfDrivers = Driver.drivers.length

		if (totalOfDrivers === 0) return; // caso seja vazio

		const sumOfAge = Driver.drivers.reduce((total, driver)=>{ 
			return total + driver.age
		}, 0)

		console.log((sumOfAge / totalOfDrivers).toFixed(2))

		// OUTRA FORMA -- ver onde está o erro pq dá undefined
		// let sum
		// const middleAge = this.drivers.forEach((driver)=>{
		// 	sum += driver.age
		// console.log(driver.age)
		// 
		// 	return sum / Driver.drivers.length
		// })
		// console.log(middleAge)
		// console.log(`A média de idade das motoristas é ${middleAge}`)
	}
}