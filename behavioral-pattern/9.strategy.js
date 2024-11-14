class Strategy {
    execute(a, b) {
        throw new Error("Method 'execute()' must be implemented.");
    }
}

class ConcreteStrategyAdd extends Strategy {
    execute (a, b) {
        return a + b;
    }
}

class ConcreteStrategyMultiply extends Strategy {
    execute (a, b) {
        return a * b;
    }
}

class Context {
    setStrategy (strategy) {
        this.strategy = strategy;
    }
    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}

const context = new Context();
context.setStrategy(new ConcreteStrategyAdd());
console.log(context.executeStrategy(3, 4));

context.setStrategy(new ConcreteStrategyMultiply());
console.log(context.executeStrategy(3, 4));
