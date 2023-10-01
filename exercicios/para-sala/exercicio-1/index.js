import { Driver } from './classes/Driver.js';
import { Passenger } from './classes/Passenger.js';

// const motorista0 = new Driver('Maria', 13);
const motorista1 = new Driver('Babi', 38);
const motorista2 = new Driver('Jose', 23);

console.log('motorista 1: ', motorista1);
console.log('motorista 2: ', motorista2);

const passageira1 = new Passenger('Lais', 17, 1111);
const passageira2 = new Passenger('Marta', 34, 2222);
const passageira3 = new Passenger('Dani', 53, 3333);

console.log('passageira 1: ', passageira1);
console.log('passageira 2: ', passageira2);
console.log('passageira 3: ', passageira3);

passageira1.requestDrive(motorista1, 12, 1111);
passageira1.requestDrive(motorista2, 35, 1111);
passageira2.requestDrive(motorista1, 24, 2222);

console.log('passageira 1: ', passageira1);
console.log('passageira 2: ', passageira2);
console.log('motorista 1: ', motorista1);
console.log('motorista 2: ', motorista2);
