import { Driver } from './classes/Driver.js';
import { Passenger } from './classes/Passenger.js';

const motorista1 = new Driver('Maria', 43);
const motorista2 = new Driver('Jose', 36);
const motorista3 = new Driver('Marta', 26);
const motorista4 = new Driver('Ana', 32);
const motorista5 = new Driver('Paula', 19);

const passageira1 = new Passenger('Luara', 27, 111);
const passageira2 = new Passenger('Erica', 15, 222);
const passageira3 = new Passenger('Claudia', 25, 333);

console.log(Driver.drivers);
console.log(Passenger.passengers);

Driver.numberOfDrivers();
Passenger.numberOfPassengers();

Driver.ageAverage();
Passenger.ageAverage();
