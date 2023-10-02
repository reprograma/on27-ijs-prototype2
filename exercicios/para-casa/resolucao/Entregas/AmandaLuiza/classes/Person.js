class Person {
  constructor(name, CPF) {
    this.name = name;
    this._CPF = CPF;
  }

  get CPF() {
    return this._CPF;
  }
}

// Exemplo de uso:
const person1 = new Person('Maria', 12345678900);
console.log(person1); // { name: 'Maria' }
console.log(person1.CPF); // 12345678900