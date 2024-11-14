class RealSubject {
    request () {
        console.log("Real subject handling request");
    }
}

class Proxy {
    constructor (realSubject) {
        this.realSubject = realSubject;
    }
    request() {
        console.log("Proxy in control, delegating...");
        this.realSubject.request();
    }
}

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.request();