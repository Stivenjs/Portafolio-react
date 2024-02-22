import '../styles/nav.css';

function Nav({ Navbutton }) {
  return (
    <div className="navbar">
      <button className="nav-buttons">{Navbutton}</button>
    </div>
  );
}

export default Nav;
