import Nav from "./components/Nav";
import Buttondownload from "./components/Buttondownload";
import "./styles/nav.css";

function App() {
  return (
    <div>
      <div className="nav-buttons">
        <Nav Navbutton="Inicio" />
        <Nav Navbutton="Proyectos" />
        <Nav Navbutton="Contacto" />
        <Nav Navbutton="Sobre mi" />
      </div>
      <div>
        <Buttondownload Descargar="Descargar CV" />
      </div>
    </div>
  );
}

export default App;
