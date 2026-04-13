import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Ratings from "./Components/Ratings/Ratings";
import Cards from "./Components/Cards/Cards";
import { ToastContainer } from "react-toastify/unstyled";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

const fetchCards = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const cardsPromise = fetchCards();

  const [activeTab, setActiveTab] = useState("products");
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Ratings></Ratings>

      {/* name of each tab group should be unique */}
      <div className="mt-30 text-center space-y-4">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
          <p className="text-[#627382]">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>
        <div className="tabs tabs-box justify-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label="Products"
            onClick={() => setActiveTab("products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label="Cart (0)"
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>

      <Suspense>
        {activeTab === "products" ? <Cards cardsPromise={cardsPromise}/> : <Cart cartData={cartData} setCartData={setCartData}/>}
      </Suspense>
      

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
