class Singleton {
    constructor () {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = "Singleton Data";
    }
    getData () {
        return this.data;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
