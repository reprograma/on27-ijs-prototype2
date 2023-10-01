class Person {
  name;
  age;

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
  email;
  password;

  constructor(name, age, email, password) {
    super(name, age);
    this.email = email;
    this.password = password;
  }
}

const user1 = new User('Luara', 28, 'luara@email.com', 123);
console.log(user1)
user1.speak();
