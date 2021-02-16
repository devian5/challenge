const Storage = require('../storage')


class Car {
    
    storage;

    constructor(){
        this.storage = new Storage()
    }

    async indexAll(){
        return;
    };

    async store(){
        return;
    };

    async destroy(){
        return;
    };

    async update(){
        return;
    };


}

const carController = new Car()
module.exports = carController