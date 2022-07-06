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



class Sensei extends Ninja {
    constructor(wisdom) {
        super(name, 200, 10, 10);
        this.widsom = 10;
    }
    speakWisdom() {
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}






const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
