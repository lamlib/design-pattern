class Remote {
    constructor (device) {
        this.device = device;
    }
    power () {
        console.log("Remote: power toggle");
        this.device.togglePower();
    }
}

class TV {
    togglePower() {
        console.log("TV: Power toggled");
    }
}

const tvRemote = new Remote(new TV());
tvRemote.power();