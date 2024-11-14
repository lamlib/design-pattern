class ModernChair {
    sit () {
        console.log("Sitting on a modern chair.");
    }
}

class VictorianChair {
    sit () {
        console.log("Sitting on a victorian chair.");
    }
}

class ModernFurnitureFactory {
    createChair () {
        return new ModernChair();
    }
}

class VictorianFurnitureFactory {
    createChair () {
        return new VictorianChair();
    }
}

function getFurnitureFactory (style) {
    switch (style) {
        case "modern":
            return new ModernFurnitureFactory();
        case "victorian":
            return new ModernFurnitureFactory();
        default:
            break;
    }
}

const factory = getFurnitureFactory("modern");
const chair = factory.createChair();
chair.sit(); 

