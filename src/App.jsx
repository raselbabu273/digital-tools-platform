import "./App.css";
import Banner from "./Components/Banner/Banner";
import Container from "./Components/CardContainer/Container";
import NavBar from "./Components/NavBar/NavBar";
import Ratings from "./Components/Ratings/Ratings";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Ratings></Ratings>
      <Container></Container>
    </>
  );
}

export default App;
