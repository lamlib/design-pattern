class Flyweight {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    operation (uniqueState) {
        console.log(`Shared: ${this.sharedState}, Unique: ${uniqueState}`);
    }
}

class FlyweightFactory {
    constructor () {
        this.flyweights = {};
    }
    getFlyweight(sharedState) {
        if (!this.flyweights[sharedState]) {
            this.flyweights[sharedState] = new Flyweight(sharedState);
        }
        return this.flyweights[sharedState];
    }
}

const factory = new FlyweightFactory();
const flyweight1 = factory.getFlyweight("Shared A");
flyweight1.operation("Unique 1");

const flyweight2 = factory.getFlyweight("Shared A");
flyweight2.operation("Unique 2");

console.log(flyweight1 === flyweight2);
