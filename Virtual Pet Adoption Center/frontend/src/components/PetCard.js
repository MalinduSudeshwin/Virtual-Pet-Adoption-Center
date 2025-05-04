import { generateCertificate } from "../utils/generateCertificate"; // Import the certificate generation function

const moodColors = {
  Happy: "bg-green-200",
  Excited: "bg-yellow-200",
  Sad: "bg-red-200",
};

export default function PetCard({ pet, onAdopt, onDelete, onEdit }) {

  // Function to handle downloading the certificate
  const handleDownloadCertificate = () => {
    generateCertificate(pet);  // Generate the certificate for the adopted pet
  };

  return (
    <div className={`p-6 rounded-xl shadow-lg border ${moodColors[pet.mood] || "bg-gray-100"}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{pet.name}</h2>

      <table className="min-w-full table-auto text-gray-700">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-semibold">Species:</td>
            <td className="px-4 py-2">{pet.species}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Age:</td>
            <td className="px-4 py-2">{pet.age}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Personality:</td>
            <td className="px-4 py-2">{pet.personality}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Mood:</td>
            <td className="px-4 py-2">{pet.mood}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Status:</td>
            <td className="px-4 py-2">{pet.adopted ? "Adopted" : "Available"}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-wrap gap-2 mt-4">
        {!pet.adopted && (
          <button
            onClick={() => onAdopt(pet._id)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Adopt
          </button>
        )}
        <button
          onClick={() => onEdit(pet)}
          className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this pet?")) {
              onDelete(pet._id);
            }
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
        {pet.adopted && (
          <button
            onClick={handleDownloadCertificate} // Handle download certificate click
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Download Certificate
          </button>
        )}
      </div>
    </div>
  );
}
