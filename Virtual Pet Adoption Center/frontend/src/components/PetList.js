import PetCard from "./PetCard";

export default function PetList({ pets, onAdopt, onDelete, onEdit }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {pets.map((pet) => (
        <PetCard
          key={pet._id}
          pet={pet}
          onAdopt={onAdopt}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
