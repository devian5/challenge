const Storage = require('../storage')


class Car {
    
    storage;

    constructor(){
        this.storage = new Storage()
    }


}

const carController = new Car()
module.exports = carController