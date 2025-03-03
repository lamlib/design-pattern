class Subject {
    constructor () {
        this.observers = [];
    }
    subscribe (observer) {
        this.observers.push(observer);
    }
    unsubscribe (observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify () {
        this.observers.forEach(observer => observer.update());
    }
}

class Observer {
    update() {
        console.log("Observer notified");
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify();