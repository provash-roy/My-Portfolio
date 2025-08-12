import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection></HeroSection>
        <About />
        <Projects />
        <Skills />
       
      </main>
      <Footer />
    </>
  );
}

export default App;
