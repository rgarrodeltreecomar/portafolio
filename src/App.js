import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
      </Container>
    </>
  );
}

export default App;
