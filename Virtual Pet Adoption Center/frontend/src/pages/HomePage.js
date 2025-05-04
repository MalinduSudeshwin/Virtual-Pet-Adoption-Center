import { useEffect, useState } from "react";
import {
  getAllPets, addPet, deletePet, updatePet, adoptPet, filterPets
} from "../services/api";
import PetList from "../components/PetList";
import AddPetForm from "../components/AddPetForm";
import FilterBar from "../components/FilterBar";

export default function HomePage() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  const fetchPets = async () => {
    const res = await getAllPets();
    setPets(res.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleAdd = async (pet) => {
    if (pet._id) {
      await updatePet(pet._id, pet);
    } else {
      await addPet(pet);
    }
    fetchPets();
  };

  const handleAdopt = async (id) => {
    await adoptPet(id);
    fetchPets();
  };

  const handleDelete = async (id) => {
    await deletePet(id);
    fetchPets();
  };

  const handleFilter = async (mood) => {
    if (mood === "All") {
      fetchPets();
    } else {
      const res = await filterPets(mood);
      setPets(res.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-blue-600">
          🐾 Virtual Pet Adoption Center 🐾
        </h1>
  
        <FilterBar onFilterChange={handleFilter} />
  
        <AddPetForm
          onSubmit={handleAdd}
          selectedPet={selectedPet}
          clearForm={() => setSelectedPet(null)}
        />
  
        <PetList
          pets={pets}
          onAdopt={handleAdopt}
          onDelete={handleDelete}
          onEdit={setSelectedPet}
        />
      </div>
    </div>
  );
  
}
