import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import contextoUsuario from "./componentes/contextos/contextoUsuario";
import TelaCadastroLogin from "./componentes/telas/telaCadastroLogin";
import TelaCadastroVeiculos from "./componentes/telas/telaCadastroVeiculos";
import TelaCadastroUsuarios from "./componentes/telas/telaCadastroUsuarios";
import TelaMenu from "./componentes/telas/telaMenu";
import Menu from "./componentes/templates/menu";

function App() {
  const [usuario, setUsuario] = useState({
    nome: '',
    logado: false
  });

  if (!usuario.logado) {
    return (
      <contextoUsuario.Provider value={[usuario, setUsuario]}>
        <TelaCadastroLogin />
      </contextoUsuario.Provider>
    );
  }
  else {
    return (
      <div className='App'>
        <contextoUsuario.Provider value={[usuario, setUsuario]}>
          <BrowserRouter>
            <Routes>
              <Route path="/usuarios" element={<TelaCadastroUsuarios />} />
              <Route path="/carros" element={<TelaCadastroVeiculos />} />
              <Route path="*" element={<TelaMenu />} />
            </Routes>
          </BrowserRouter>
        </contextoUsuario.Provider>
      </div>

    );
  }
}


export default App;
