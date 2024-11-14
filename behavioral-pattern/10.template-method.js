class Game {
    play () {
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
    initialize () {
        throw new Error("Method 'initialize' must be implemented");
    }
    startPlay () {
        throw new Error("Method 'initialize' must be implemented");
    }
    endPlay () {
        throw new Error("Method 'initialize' must be implemented");
    }
}

class Football extends Game {
    initialize () {
        console.log("Football Game Initialized");
    }
    startPlay () {
        console.log("Football Game Started");
    }
    endPlay () {
        console.log("Football Game Finished");
    }
}

const game = new Football();
game.play();