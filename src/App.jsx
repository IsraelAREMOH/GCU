import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./container/Home/Home";
import About from "./container/About/About";
import Service from "./container/service/Service";
import Project from "./container/project/Project";
import Contact from "./container/contact/Contact";
import PageFooter from "./components/PageFooter";
import Herosection from "./components/Herosection";
import ScrollHandler from "./components/ScrollHandler";

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {/* Conditionally render HeroSection */}

      {!["/contact", "/about"].includes(location.pathname) && <Herosection />}

      <ScrollHandler />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/what we offer" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <PageFooter />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
