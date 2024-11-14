class sFile {
    constructor (name) {
        this.name = name;
    }
    display () {
        console.log(this.name);
    }
}

class Folder {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    add (item) {
        this.children.push(item);
    }
    display () {
        console.log(this.name);
        this.children.forEach(child => child.display());
    }
}

const folder = new Folder("root");
const file1 = new sFile("file1");
const file2 = new sFile("file2");

folder.add(file1);
folder.add(file2);
folder.display();