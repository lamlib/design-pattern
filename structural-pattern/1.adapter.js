class OldSystem {
    oldMethod () {
        console.log("Old system method");
    }
}

class NewSystemAdapter {
    constructor () {
        this.oldSystem = new OldSystem();
    }
    newMethod () {
        this.oldSystem.oldMethod();
    }
}

const newSystem = new NewSystemAdapter();

newSystem.newMethod();