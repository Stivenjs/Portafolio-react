import Nav from "./components/Nav";
import "./styles/nav.css";


function App() {
  return (
    <div className="nav-buttons">
      <Nav Navbutton="Inicio" />
      <Nav Navbutton="Proyectos" />
      <Nav Navbutton="Contacto" />
      <Nav Navbutton="Sobre mi" />
    </div>
  );
}

export default App;
