class ConcreteElementA {
    accept (visitor) {
        visitor.visitElementA(this)
    }
}

class ConcreteElementB {
    accept (visitor) {
        visitor.visitElementB(this)
    }
}

class ConcreteVisitor {
    visitElementA(element) {
        console.log("Visiting Element A");
    }
    visitElementB(element) {
        console.log("Visiting Element B");
    }
}

const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor = new ConcreteVisitor();

elements.forEach(element => element.accept(visitor));