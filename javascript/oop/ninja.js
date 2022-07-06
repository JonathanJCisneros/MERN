class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}!`)
    }
    showStats() {
        console.log(`My name is: ${this.name}, my strength is: ${this.strength}, my speed is: ${this.speed}, and my health is ${this.health}`)
    }
    drinkSake() {
        this.health += 10;
        console.log("Your health has gone up 10pts!")
    }
}

const ninja1 = new Ninja("Hyabusa", 25);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();