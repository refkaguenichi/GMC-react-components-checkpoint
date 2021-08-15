import "./App.css";
import CarouselC from "./Components/Carousel/Carousel";
import NavbarC from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";

function App() {
  return (
    <div className="App">
      <NavbarC />
      <br />
      <CarouselC />
      <br />
      <Users />
    </div>
  );
}

export default App;
