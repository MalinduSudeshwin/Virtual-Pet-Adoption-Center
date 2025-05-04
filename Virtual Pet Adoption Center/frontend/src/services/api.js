import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

export const getAllPets = () => API.get('/pets');
export const getPet = (id) => API.get(`/pets/${id}`);
export const addPet = (data) => API.post('/pets', data);
export const updatePet = (id, data) => API.put(`/pets/${id}`, data);
export const adoptPet = (id) => API.patch(`/pets/${id}/adopt`);
export const deletePet = (id) => API.delete(`/pets/${id}`);
export const filterPets = (mood) => API.get(`/pets/filter?mood=${mood}`);
