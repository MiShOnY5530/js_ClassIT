class Animal {
    constructor(param_1, param_2) {
        this.name = param_1;
        this.type = param_2;
    }

    showName() {
        alert(this.name); // 'Слони'
        alert(this.type); // 'Бігімоти'
    }
}

const animals = new Animal("Слони", "Бігімоти");
animals.showName();

const animals2 = new Animal();
animals2.showName();
