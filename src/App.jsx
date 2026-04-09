import "./App.css";
import Banner from "./Components/Banner/Banner";
import Container from "./Components/CardContainer/Container";
import NavBar from "./Components/NavBar/NavBar";
import Ratings from "./Components/Ratings/Ratings";

const fetchTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {

  const toolPromise = fetchTools();
  // console.log(toolPromise);
  
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Ratings></Ratings>
      <Container toolPromise={toolPromise}></Container>
    </>
  );
}

export default App;
