  name;
  age;
  numberOfRides = 0;
  amountEarned = 0;

  constructor(name, age) {
    if(age >= 18) {
      this.name = name;
      this.age = age;
    } else {
      throw "Você precisa ter 18 anos ou mais para ser motorista."
    }
  }

  runDrive(amount) {
    this.numberOfRides++;
    this.amountEarned += amount;
  }