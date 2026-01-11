import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Nav from "./modules/nav";

function App() {
  return (
    <>
      {/* always display nav bar */}
      <Nav />
      {/* set margin for content */}
    <body style={{margin: '2%'}}>
      {/* set routes for pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </body>
    </>
  );
}

export default App;
