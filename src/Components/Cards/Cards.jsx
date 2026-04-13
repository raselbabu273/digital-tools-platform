import React, { use } from "react";
import AvailableCards from "../AvailableCards/AvailableCards";

const Cards = ({ cardsPromise = Promise.resolve([]) }) => {
  const cards = use(cardsPromise);
  console.log(cards);

  return (
    <div className="bg-base-200 pt-10">
      <AvailableCards cards={cards}></AvailableCards>
    </div>
  );
};

export default Cards;
