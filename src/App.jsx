import { Routes, Route } from "react-router-dom";

import { Proyects } from "./Pages/Proyects";
import { AboutMe } from "./Pages/AboutMe";
import { Contact } from "./Pages/Contact";
import { Laout } from "./views/Laout";
import { Index } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Laout />}>
        <Route index element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Proyects />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Route>
    </Routes>
  );
}

export default App;
