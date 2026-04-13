import React, { use, useState } from "react";
import AvailableCards from "../AvailableCards/AvailableCards";

const Cards = ({ cardsPromise }) => {
  const cards = use(cardsPromise);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {cards.map((card) => (
        <AvailableCards key={card.id} card={card} setIsClicked={setIsClicked} isClicked={isClicked}/>
      ))}
    </div>
    
  );
};

export default Cards;
