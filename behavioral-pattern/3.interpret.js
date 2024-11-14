class Context {
    constructor (input) {
        this.input = input;
        this.output = 0;
    }
}

class Expression {
    interpret (context) {
        throw new Error("Method 'interpret()' must be implemented.");
    }
}

class TerminalExpression extends Expression {
    interpret(context) {
        if (context.input === "one") {
            context.output = 1;
        } else if (context.input === "two") {
            context.output = 2;
        }
    }
}

const context = new Context("one");
const expression = new TerminalExpression();

expression.interpret(context);
console.log(context.output);
