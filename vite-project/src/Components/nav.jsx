import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import brugerikon from "../assets/profil1.svg";
import BurgerMenu from "./burger";

// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Nav() {
// javascript her

  return (
<nav>
<NavLink to="/"> <img src={logo} className="logo" alt="logo"></img> </NavLink>

<div>
<BurgerMenu></BurgerMenu>
<NavLink to="/omosside" className="navlink">Om Plan.et</NavLink>
<NavLink to="/loginside" className="navlink">
<img src={brugerikon} alt="bruger ikon"></img> Log ind</NavLink>
</div>


</nav>

    // alt html her (inden for forældre <>)
  )
}

export default Nav
