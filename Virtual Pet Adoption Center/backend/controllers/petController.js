const service = require('../services/petService');
const Pet = require('../models/petModel');
const PDFDocument = require('pdfkit');

exports.generateCertificate = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet || !pet.adopted) {
      return res.status(404).send("Pet not found or not adopted yet.");
    }

    const doc = new PDFDocument();
    res.setHeader('Content-Disposition', 'attachment; filename=certificate.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);
    doc.fontSize(25).text('Adoption Certificate', { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text(`This certifies that ${pet.name}, a ${pet.age}-year-old ${pet.species},`);
    doc.text(`with a ${pet.personality} personality, has been adopted.`);
    doc.text(`Adopted on: ${pet.adoption_date.toDateString()}`);
    doc.end();
  } catch (error) {
    res.status(500).send("Error generating certificate");
  }
};

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

