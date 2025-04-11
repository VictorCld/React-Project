import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrincipalPage from "./pages/principal/PrincipalPage";
import SobrePage from "./pages/sobre/SobrePage";
import AtividadePage from "./pages/atividades/AtividadePage";
import VoluntariadoPage from "./pages/Voluntariado/VoluntariadoPage";
import CadastroPage from "./pages/cadastro/CadastroPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/atividades" element={<AtividadePage />} />
          <Route path="/voluntariado" element={<VoluntariadoPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
