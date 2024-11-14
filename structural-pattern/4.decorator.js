class Coffee {
    cost () {
        return 5;
    }
}

class MilkDecorator {
    constructor (coffee) {
        this.coffee = coffee;
    }
    cost () {
        return this.coffee.cost() + 2;
    }
}

const myCoffee = new Coffee();
const coffeeWithMilk = new MilkDecorator(myCoffee);
console.log(coffeeWithMilk.cost());;
