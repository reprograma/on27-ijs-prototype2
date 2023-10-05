export class Person {
    constructor(name, CPF) {
      this.name = name;
      this._CPF = CPF;
    }
  
    get cpf() {
      return this._CPF;
    }
  }
