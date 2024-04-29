import './App.css'
import Nav from './Components/nav'
import {Routes, Route, Navigate} from "react-router-dom"
import Forside from './Pages/forside'
import Adminside from './Pages/adminside'
import Brugerside from './Pages/brugerside'
import Loginside from './Pages/loginside'
import Omosside from './Pages/omosside'

// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function App() {


  return (
    <>
<Nav>
</Nav>

<main>
  <Routes>
    <Route path="/" element={<Forside />}></Route>
    <Route path="/adminside" element={< Adminside/>}></Route>
    <Route path="/brugerside" element={<Brugerside />}></Route>
    <Route path="/loginside" element={<Loginside />}></Route>
    <Route path="/omosside" element={<Omosside />}></Route>
    <Route path="*" element={<Navigate to="/" />}></Route>
  </Routes>
</main>
    </>
/* Det er her SPA - single page application bliver brugt, så når man inde i main.jsx har indsat en 'BrowserRoute' omkring 'app',
så skal man her defienre hvilke routes der er tale om. Routes er de ruter som siden skal navigeres rundt på/ med,
det vil sige at når vi har en route path til "/" så er der tale om forsiden altså: plan.et.julielksn.dk/ 
hvorimod til "/adminside" så fører den til plan.et.julielksn.dk/adminside
"*" stjernen betyder så at alle andre sider som ikke er specificeret ville føre til en 404 side, 
eller i vores tilfælde har vi valgt at alle andre urls/ routes skal føre tilbage til forsiden. 
Fx ville plan.et.julielksn.dk/købside føre til forsiden.  */
  );
}

export default App
