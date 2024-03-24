import TelaCadastroLogin from "./componentes/telas/telaCadastroLogin";
import TelaCadastroVeiculos from "./componentes/telas/telaCadastroVeiculos";
import TelaCadastroUsuarios from "./componentes/telas/telaCadastroUsuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaMenu from "./componentes/telas/telaMenu";
import { useState } from "react";
import contextoUsuario from "./componentes/contextos/contextoUsuario";

function App() {
  const [usuario, setUsuario] = useState({
    email: '',
    logado: false
  });

  if (!usuario.logado) {
    return (
      <contextoUsuario.Provider value={[usuario, setUsuario] }>
        <TelaCadastroLogin/>
      </contextoUsuario.Provider>
    )
  }
  return (
    <div className="App">
      <contextoUsuario.Provider value={[usuario, setUsuario] }>
        <BrowserRouter>
          <Routes>
            
            <Route path="/usuarios" element={<TelaCadastroUsuarios />} />
            <Route path="/carros" element={<TelaCadastroVeiculos />} />
            <Route path="/" element={<TelaMenu />} />
          </Routes>
        </BrowserRouter>
      </contextoUsuario.Provider>
    </div>
  );
}

export default App;
