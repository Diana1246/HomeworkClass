class GuideDog {
    static legsCount = 4
    constructor(name,age,isTrained){
        this.name= name,
        this.age = age,
        this.isTrained = true
    }
    getInfo(){
        const info = `Name: ${this.name}, Age: ${this.age}, is trained: ${this.isTrained}`;
console.log(info)
    }
    bark(){
        return "WOOF!";
    }
}

const guideDog = new GuideDog("Sebastian", 7);
console.log(guideDog.getInfo());
console.log(guideDog.bark());
console.log(` Legs ${GuideDog.legsCount}`);
 