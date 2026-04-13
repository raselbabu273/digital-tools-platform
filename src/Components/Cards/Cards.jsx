import { use } from "react";
import AvailableCards from "../AvailableCards/AvailableCards";

const Cards = ({ cardsPromise, cartData, setCartData }) => {
  const cards = use(cardsPromise);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {cards.map((card) => (
        <AvailableCards key={card.id} card={card} cartData={cartData} setCartData={setCartData}/>
      ))}
    </div>
    
  );
};

export default Cards;
