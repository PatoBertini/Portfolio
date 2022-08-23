import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import BackendSkills from "./Components/Skills/BackendSkills";


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <BackendSkills/>
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
