class User {
	name;
	age;
	email;
	#password;

	constructor(name, age, email, password, isAdmin) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.#password = password;
    this.isAdmin = isAdmin;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}

  #encryptPassword() {
		return (this.#password = `*** ${this.#password} + ***`);
	}

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);

// console.log(user1.name); //Luara
// console.log(user1.age); //27
// console.log(user1.email); //luarakerlen@hotmail.com
// console.log(user1.password); //123456

user1.password = 1111;
console.log(user1.password);