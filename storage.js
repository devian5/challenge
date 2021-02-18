

class Storage {

    state =  [];

    constructor(){
        console.log('se ha creado el constructor');
    
        
    };

    async set(object){
       this.state.push(object);
       return this.state.length;
    };

    async get(){
        return this.state.slice(-10);
         
    };

   async findById(id) {
       const element = this.state [id-1] 
    //    return element ? element : new Error('ooops');
       if(!element){
        throw new Error('ooops');
       }
       return element;
   };

    async updateById(id, nextObject) {
        await this.findById(id);
        this.state[id-1] = nextObject;
        return nextObject
    };

}

module.exports = Storage