import TelaCadastroLogin from "./componentes/telas/telaCadastroLogin";
import TelaCadastroVeiculos from "./componentes/telas/telaCadastroVeiculos";
import TelaCadastroUsuarios from "./componentes/telas/telaCadastroUsuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaMenu from "./componentes/telas/telaMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<TelaCadastroLogin/>}/>
          <Route path="/usuarios" element={<TelaCadastroUsuarios/>}/>
          <Route path="/carros" element={<TelaCadastroVeiculos/>}/>
          <Route path="/" element={<TelaMenu/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
