import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/sass/Pages/Apartmentrental.scss";
import Apartment_description from "../../components/Collapse";
import Carousel from "../../components/Carousel";
import Apartment_Head from "../../components/Apartment_Head";

function Apartmentrental() {
  const { id } = useParams();
  const [selectedCards, setSelectedCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Apartment ID:", id); // Log l'ID

  useEffect(() => {
    const fetchApartmentData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log les données récupérées
        const apartment = data.find((card) => card.id === id);
        if (!apartment) {
          throw new Error("Apartment not found");
        }
        setSelectedCards(apartment);
        console.log("Selected apartment:", apartment); // Log l'appartement sélectionné
      } catch (error) {
        console.error("Error fetching apartment data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchApartmentData();
    } else {
      setError("No apartment ID provided");
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selectedCards) return <div>No apartment data found</div>;

  return (
    <div className="Apartment-rental">
      <Carousel pictures={selectedCards.pictures} />
      <Apartment_Head selectedCards={selectedCards} />
      <div className="ADarea">
        {selectedCards.description && (
          <Apartment_description
            title="Description"
            content={selectedCards.description}
          />
        )}
        {selectedCards.equipments && selectedCards.equipments.length > 0 && (
          <Apartment_description
            title="Équipements"
            content={
              <ul className="equipList">
                {selectedCards.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        )}
      </div>
    </div>
  );
}

export default Apartmentrental;
