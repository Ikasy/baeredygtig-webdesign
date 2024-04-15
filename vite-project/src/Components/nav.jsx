import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import brugerikon from "../assets/profil1.png";

// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Nav() {
// javascript her

  return (
<nav>
<NavLink to="/"> <img src={logo} alt="logo"></img> </NavLink>

<div>
<NavLink to="/omosside" className="navlink">Om Plan.et</NavLink>
<NavLink to="/loginside" className="navlink">
<img src={brugerikon} alt="bruger ikon"></img> </NavLink>
</div>


</nav>

    // alt html her (inden for forældre <>)
  )
}

export default Nav
