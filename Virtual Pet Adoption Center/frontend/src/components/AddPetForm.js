import { useState, useEffect } from "react";

export default function AddPetForm({ onSubmit, selectedPet, clearForm }) {
  const [form, setForm] = useState({
    name: "",
    species: "",
    age: "",
    personality: "",
  });

  useEffect(() => {
    if (selectedPet) {
      setForm(selectedPet);
    }
  }, [selectedPet]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", species: "", age: "", personality: "" });
    clearForm();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {selectedPet ? "Update Pet" : "Add New Pet"}
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="species"
            value={form.species}
            onChange={handleChange}
            placeholder="Species"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="personality"
            value={form.personality}
            onChange={handleChange}
            placeholder="Personality"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          {selectedPet ? "Update Pet" : "Add Pet"}
        </button>
      </form>
    </div>
  );
}
