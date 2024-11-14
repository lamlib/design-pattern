class Mediator {
    notify(sender, event) {
        throw new Error ("Method 'notify()' must be implemented.");
    }
}

class ConcreteMediator extends Mediator {
    constructor (component1, component2) {
        super();
        this.component1 = component1;
        this.component2 = component2;
        this.component1.setMediator(this);
        this.component2.setMediator(this);
    }
    notify(sender, event) {
        if (event === "A") {
            console.log("Mediator reacts to A and triggers B");
            this.component2.doB();
        }
        if (event === "B") {
            console.log("Mediator reacts to B and triggers A");
            this.component1.doA();
        }
    }
}

class Component {
    setMediator (mediator) {
        this.mediator = mediator;
    }
}

class Component1 extends Component {
    doA () {
        console.log("Component 1 does A");
    }
    sendToMediator () {
        this.mediator.notify(this, "A")
    }
}

class Component2 extends Component {
    doB () {
        console.log("Component 2 does B");
    }
    sendToMediator () {
        this.mediator.notify(this, "B")
    }
}

const component1 = new Component1();
const component2 = new Component2();
const mediator = new ConcreteMediator(component1, component2);

component1.sendToMediator();