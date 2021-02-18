const Storage = require('../storage')


class Car {
    
    storage;

    constructor(){
        this.storage = new Storage()
    }

    async indexAll(){
        return this.storage.get();
    };

    async store(object){
        return this.storage.set(object);
    };

    async destroy(id){

        return this.storage.deleteById(id);
    };

    async update(id, car){
        return this.storage.updateById(id,car);
    };


}

const carController = new Car()
module.exports = carController