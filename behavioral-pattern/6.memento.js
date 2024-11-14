class Memento {
    constructor (state) {
        this.state = state;
    }
    getState () {
        return this.state;
    }
}

class Originator {
    setState (state) {
        this.state = state;
    }
    save () {
        return new Memento(this.state);
    }
    restore (memento) {
        this.state = memento.getState();
    }
}

class Caretaker {
    constructor () {
        this.mementos = [];
    }
    addMemento (memento) {
        this.mementos.push(memento);
    }
    getMemento(index) {
        return this.mementos[index];
    }
}

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State1");
caretaker.addMemento(originator.save());

originator.setState("State2");
caretaker.addMemento(originator.save());

originator.restore(caretaker.getMemento(0));
console.log(originator.state);
