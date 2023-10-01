class FullName {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const idade = 10;
class Animal {
  type;
  name;
  age;

  constructor(type, name, age) {
    if(age > idade) {
      this.type = type;
      this.name = name;
      this.age = age;
    } else {
      console.log('Idade não suficiente');
    }
  }

  eat() {
    console.log('O animal está comendo')
  }
}


const fullName1 = new FullName('Aslam', 'Rangel')
const animal1 = new Animal('cachorro', 'Aslam', 5);
console.log(animal1)