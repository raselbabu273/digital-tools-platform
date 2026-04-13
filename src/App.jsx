import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Ratings from "./Components/Ratings/Ratings";
import Cards from "./Components/Cards/Cards";
import Container from "./Components/CardContainer/Container";
import { ToastContainer } from "react-toastify/unstyled";

const fetchCards = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {

  const cardsPromise = fetchCards();
  
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Ratings></Ratings>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Cards cardsPromise={cardsPromise}></Cards>
      </Suspense>

      <ToastContainer />
      
    </>
  );
}

export default App;
