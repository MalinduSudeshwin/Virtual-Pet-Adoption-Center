import jsPDF from "jspdf";

export function generateCertificate(pet) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(" Pet Adoption Certificate ", 20, 30);

  doc.setFontSize(14);
  doc.text(`This certifies that`, 20, 50);
  doc.text(`${pet.name} the ${pet.species}`, 20, 60);
  doc.text(`has been lovingly adopted.`, 20, 70);

  doc.text(`Personality: ${pet.personality}`, 20, 85);
  doc.text(`Adoption Date: ${new Date(pet.adoption_date).toLocaleDateString()}`, 20, 100);

  doc.text("Thank you for giving a pet a forever home! ", 20, 120);

  doc.save(`${pet.name}_Adoption_Certificate.pdf`);
}
