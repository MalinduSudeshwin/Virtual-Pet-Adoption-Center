const express = require('express');
const router = express.Router();
const controller = require('../controllers/petController');

const petController = require('../controllers/petController');

router.get('/', controller.getAllPets);
router.get('/:id', controller.getPetById);
router.post('/', controller.addPet);
router.put('/:id', controller.updatePet);
router.patch('/:id/adopt', controller.adoptPet);
router.delete('/:id', controller.deletePet);
router.get('/filter', controller.filterByMood);



module.exports = router;
