class Animal{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    getAge(){
        return this.age
    }
}

const animal = new Animal("Dog", 5);
console.log(animal.getAge());