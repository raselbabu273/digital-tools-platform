import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Ratings from "./Components/Ratings/Ratings";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

const fetchCards = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const cardsPromise = fetchCards();

function App() {
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
          <p className="text-[#627382]">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
        <div className="flex justify-center p-3 border-none shadow-sm">
          <button
            className={`btn rounded-full px-10 py-6 shadow-sm ${activeTab === "products" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-base-200"}`}
            onClick={() => setActiveTab("products")}
            defaultChecked
          >
            Products
          </button>

          <button
            className={`btn rounded-full px-10 py-6 shadow-sm ${activeTab === "cart" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-base-200"}`}
            onClick={() => setActiveTab("cart")}
          >
            {`Cart (${cartData.length})`}
          </button>
        </div>
      </div>

      {activeTab === "products" ? (
        <Cards
          cardsPromise={cardsPromise}
          cartData={cartData}
          setCartData={setCartData}
        />
      ) : (
        <Cart cartData={cartData} setCartData={setCartData}/>
      )}

      <Footer />
    </>
  );
}

export default App;
