class Animal {
 constructor(name){
    this.name = name;
 }
}

class Dog extends Animal{
    constructor(name) {
        super(name);
        this.legsCount = 4;
      }
    
    bark(){
        console.log("Woof");
    }
    }


const dog = new Dog("Jo");
console.log(dog.bark());
console.log(dog.legsCount);

