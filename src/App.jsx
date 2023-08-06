import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import "./css/App.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
