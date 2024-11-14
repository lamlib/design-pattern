class Handler {
    setNext (handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class ConcreteHandler1 extends Handler {
    handle(request) {
        if (request === "One") {
            return `Handle by Handler 1`;
        }
        return super.handle(request);
    }
}

class ConcreteHandler2 extends Handler {
    handle (request) {
        if (request === "Two") {
            return `Handle by Handler 2`;
        }
        return super.handle(request);
    }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();

handler1.setNext(handler2);

console.log(handler1.handle("Two"));
