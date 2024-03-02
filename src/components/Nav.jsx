import "../styles/nav.css";
function Nav({ Navbutton }) {
  return (
    <div>
      <button className="nav-button">{Navbutton}</button>
    </div>
  );
}

export default Nav;
