class Animal {
  type;
  name;
  age;
  hungry;

  static animals = [];

  constructor(type, name, age, hungry) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.hungry = hungry;
    this.constructor.animals.push({ name, type, hungry });
  }

  eat(value) {
    console.log(`O animal chamado ${this.name} está comendo.`);
    this.hungry -= value;

    const indexFounded = Animal.animals.findIndex((animal) => animal.name === this.name);

    if(indexFounded === -1) {
      console.log('Animal não encontrado');
      return;
    }
    
    Animal.animals[indexFounded].hungry = this.hungry;
  }

  static nextToEat() {
    const sortedAnimals = Animal.animals.sort((a, b) => b.hungry - a.hungry);
    console.log(`O próximo animal que precisa comer é ${sortedAnimals[0].name}`);
  }
}

const animal1 = new Animal('cachorro', 'Aslam', 5, 50);
const animal2 = new Animal('gato', 'Pipoca', 2, 100);
const animal3 = new Animal('gato', 'Julieta', 1, 40);

console.log(Animal.animals)

animal1.eat(10);
animal2.eat(80);
animal3.eat(15);

console.log(Animal.animals)

// console.log(animal1)
// console.log(animal2)
// console.log(animal3)

Animal.nextToEat()
