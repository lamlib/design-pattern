class State {
    handle (context) {
        throw new Error("Method 'handle()' must be implemented");
    }
}

class ConcreteStateA extends State {
    handle(context) {
        console.log("State A handling request.");
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB extends State {
    handle(context) {
        console.log("State B handling request.");
        context.setState(new ConcreteStateA());
    }
}

class Context {
    constructor (state) {
        this.state = state;
    }
    setState (state) {
        this.state = state;
    }
    request () {
        this.state.handle(this);
    }
}

const context = new Context(new ConcreteStateA());

context.request();
context.request();