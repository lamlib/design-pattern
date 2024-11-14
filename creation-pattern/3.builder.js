class House {
    constructor () {
        this.hasWalls = false;
        this.hasRoof = false;
    }
}

class HouseBuilder {
    constructor () {
        this.house = new House();
    }
    buildWalls () {
        this.house.hasWalls = true;
        return this;
    }
    buildRoof () {
        this.house.hasRoof = true;
        return this;
    }
    build () {
        return this.house;
    }
}

const builder = new HouseBuilder();
const house = builder.buildWalls().buildRoof().build();
console.log(house);
