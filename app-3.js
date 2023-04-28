class Animal {
    constructor(name, age, numLegs , isGuideDog  ) {
      this.name = name;
      this.age = age;
      this.numLegs = numLegs;
      this.isGuideDog = isGuideDog;
    }
  
    getInfo() {
      let info = `Name: ${this.name}, Age: ${this.age}, Number of Legs: ${this.numLegs}, `;
      if (this.isGuideDog) {
        info += ', Trained as a Guide Dog';
      }
      console.log(info);
    }
  }

  const animal = new Animal('Volodya', 5, 4, false);
  console.log(animal.getInfo());