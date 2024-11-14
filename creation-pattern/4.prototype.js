const carPrototype = {
    drive () {
        console.log(`Driving a ${this.model}`);
    },
};

function createCar(model) {
    const newCar = Object.create(carPrototype);
    newCar.model = model;
    return newCar;
}

const myCar = createCar("Toyota");
myCar.drive();