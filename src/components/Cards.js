import React, { useEffect, useState } from "react";
import cardsData from "../api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, [cards]);

  return (
    <div className="grid md:grid-cols-3 gap-4 px-4 md:px-0">
      {cards.length &&
        cards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            <img src={card.image} alt="" className="w-[150px] h-[150px] mb-6" />
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700">{card.subtitle}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
