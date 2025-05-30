import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="bg-[#171d32] w-full overflow-hidden h-auto">
   <Navbar />
   <Home />
   <About />
   <Experience />
   <Projects />
   <Footer />


    </div>
  )
}

export default App

