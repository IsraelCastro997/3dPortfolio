import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  AIEngineering,
  Approach,
  Footer,
  StarsBackground,
} from "./components";
import Seo from "./components/Seo";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen bg-primary">
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <Seo />
        <StarsBackground />
        <div className="relative z-10">
          <Navbar />
          <main id="main">
            <Hero />
            <Tech />
            <Works />
            <AIEngineering />
            <Experience />
            <Approach />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
