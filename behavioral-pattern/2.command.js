class Light {
    turnOn () {
        console.log("Light is ON");
    }
    turnOff() {
        console.log("Light is OFF");
    }
}

class LightOnCommand {
    constructor (light) {
        this.light = light;
    }
    execute () {
        this.light.turnOn();
    }
}
class LightOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute () {
        this.light.turnOff();
    }
}

class RemoteControl {
    submit (command) {
        command.execute();
    }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.submit(lightOn);
remote.submit(lightOff);