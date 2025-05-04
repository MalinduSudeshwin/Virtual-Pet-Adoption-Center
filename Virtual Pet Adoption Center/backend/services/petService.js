const Pet = require('../models/petModel');
const { getMood } = require('../utils/moodLogic');

async function getAllPets() {
  const pets = await Pet.find();
  return pets.map(p => ({
    ...p.toObject(),
    mood: getMood(p.createdAt)
  }));
}

async function getPetById(id) {
  const pet = await Pet.findById(id);
  return { ...pet.toObject(), mood: getMood(p.createdAt) };
}

async function addPet(data) {
  const pet = new Pet(data);
  return await pet.save();
}

async function updatePet(id, data) {
  return await Pet.findByIdAndUpdate(id, data, { new: true });
}

async function adoptPet(id) {
  return await Pet.findByIdAndUpdate(id, {
    adopted: true,
    adoption_date: new Date()
  }, { new: true });
}

async function deletePet(id) {
  await Pet.findByIdAndDelete(id);
  return { message: 'Pet deleted successfully' };
}

async function filterPetsByMood(mood) {
  const pets = await Pet.find();
  return pets
    .map(p => ({ ...p.toObject(), mood: getMood(p.createdAt) }))
    .filter(p => p.mood === mood);
}

module.exports = {
  getAllPets,
  getPetById,
  addPet,
  updatePet,
  adoptPet,
  deletePet,
  filterPetsByMood
};

