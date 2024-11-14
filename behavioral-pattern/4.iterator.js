class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }
    next () {
        return this.index < this.collection.length
            ? { value: this.collection[this.index++], done: false }
            : { done: true };
    }
}

const items = ["apple", "banana", "orange"];
const iterator = new Iterator(items);

let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}