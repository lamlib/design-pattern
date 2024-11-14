class Animal {
    speak() {
        console.log("This animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof Woof!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow");
    }
}

class AnimalFactory {
    static createAnimal(type) {
        switch (type) {
            case "dog":
                return new Dog();
            case "cat":
                return new Cat();
            default:
                return Animal();
        }
    }
}

const myDog = AnimalFactory.createAnimal("dog");
myDog.speak(); 

const myCat = AnimalFactory.createAnimal("cat");
myCat.speak(); 