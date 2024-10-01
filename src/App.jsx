import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Company from "./page/Company";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Services from "./page/Services";
import Marketing from "./page/pagesPixo/marketing";
import IAPixo from "./page/pagesPixo/IAPixo";
import Software from "./page/pagesPixo/software";
import DisenoGrafico from "./page/pagesPixo/disenoGrafico";
import PaginaWeb from "./page/pagesPixo/paginaweb";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Importar el botón

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="bg-black flex-grow overflow-y-auto scrollable">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />}>
              <Route path="marketing" element={<Marketing />} />
              <Route path="software" element={<Software />} />
              <Route path="ai" element={<IAPixo />} />
              <Route path="disenografico" element={<DisenoGrafico />} />
              <Route path="paginaweb" element={<PaginaWeb />} />
            </Route>
          </Routes>
          <div className="px-5 sm:px-10 lg:px-24 py-20">
            <Contact />
          </div>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
