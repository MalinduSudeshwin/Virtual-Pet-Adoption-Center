const service = require('../services/petService');
const Pet = require('../models/petModel');


exports.getAllPets = async (req, res) => {
  const pets = await service.getAllPets();
  res.json(pets);
};

exports.getPetById = async (req, res) => {
  const pet = await service.getPetById(req.params.id);
  res.json(pet);
};

exports.addPet = async (req, res) => {
  const newPet = await service.addPet(req.body);
  res.status(201).json(newPet);
};

exports.updatePet = async (req, res) => {
  const updated = await service.updatePet(req.params.id, req.body);
  res.json(updated);
};

exports.adoptPet = async (req, res) => {
  const pet = await service.adoptPet(req.params.id);
  res.json(pet);
};

exports.deletePet = async (req, res) => {
  const result = await service.deletePet(req.params.id);
  res.json(result);
};

exports.filterByMood = async (req, res) => {
  const pets = await service.filterPetsByMood(req.query.mood);
  res.json(pets);
};

