import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar.jsx';
import Footer from './componentes/Footer.jsx';
import Formulario from './componentes/Formulario.jsx';
import Dashboard from './componentes/Dashboard.jsx';
import { FormularioProvider } from './componentes/FormularioContext';

function App() {
  return (
    <FormularioProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Formulario />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FormularioProvider>
  );
}

export default App;
