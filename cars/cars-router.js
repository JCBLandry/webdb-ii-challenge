const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
  .then(car => {
    res.json(car);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve car' });
  });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newcarEntry => {
      res.status(201).json(newcarEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

router.put('/:id', (req, res) => {
    const { id } =req.params;
    const changes = req.body

db('cars').where({id}).update(changes)
.then(count => {
    if (count) {
        res.json({updated: count});
    } else{
        res.status(404).json({message: 'invalid car id'})
    }
})
.catch(error=>{
    res.status(500).json({message: 'failed to get car'})
})
});

router.delete('/:id', (req, res) => {
    const { id } =req.params;
    db('cars').where({ id }).del()
    .then(count =>{
        if (count) {
            res.json({ deleted: count });
        } else {
            res.status(404).json({ message: 'invalid car id'})
        }
    })
    .catch(error=>{
        res.status(500).json({message: 'failed to get car'})
    })
    });

module.exports = router;