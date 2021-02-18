const router = require('express').Router()
const carController = require('../controllers/car');


// router.get('/cars', (req, res) => res.send('hello!'));

const callback = async (req,res) => {
    res.send(carController.indexAll())
}

router.get('/cars', callback);

router.post('/cars', async (req, res)=> {
    try {
        console.log(req.body.json())
        res.json(await carController.store(req.body));
       
   } catch (error) {
       return res.sendStatus(500).send({
           message: 'oops!'
       })
   }
})

router.put('/cars/:id', async (req,res)=>{
    const id = req.params.id;
    res.json(await carController.update(id,req.body));
});

router.delete('/cars/:id', async (req, res)=> {
    const id = req.params.id;
    res.json(await carController.destroy(id));
});

module.exports = router;


