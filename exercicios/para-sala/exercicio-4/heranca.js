class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name} está falando.`)
    }
}

class Student extends Person{}
class User extends Person {
    email;
    password;
    
    constructor(name, age, email, password){
        super(name, age); // superClass recebe os parametros da mãe
        this.email = email;
        this.password = password;
    }
}
 
const estudante = new Student('Geice', 30)
estudante.speak()

const usuaria = new User('Geice', '30', 'geice@email.com', 123456)

console.log(estudante)
console.log()
console.log(usuaria)